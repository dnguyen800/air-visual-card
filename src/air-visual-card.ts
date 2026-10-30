import { LitElement, html, TemplateResult, PropertyValues, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  HomeAssistant,
  handleAction,
  hasAction,
  LovelaceCardEditor,
  ActionHandlerEvent,
  fireEvent,
} from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';

interface HassWithFormat extends HomeAssistant {
  formatEntityState?: (stateObj: HassEntity) => string;
}

import { AirVisualCardConfig, AQILevel } from './types';
import {
  CARD_VERSION,
  AQI_LEVEL_DATA,
  POLLUTANT_NAMES,
  POLLUTANT_UNITS,
  STATE_TO_AQI_LEVEL,
  getAQILevel,
} from './const';
import { getFaceSvg } from './icons/faces';
import { getWeatherSvg, humiditySvg, windSvg } from './icons/weather';
import { cardStyles } from './styles';
import { actionHandler } from './action-handler-directive';
import { calculatePollutantConcentration } from './aqi-calculator';

console.info(
  `%c  AIR-VISUAL-CARD  \n%c  Version ${CARD_VERSION}    `,
  'color: #279b48; font-weight: bold; background: #eafaf1; padding: 2px 6px; border-radius: 4px;',
  'color: #333; font-weight: bold; background: #f0f0f0; padding: 2px 6px; border-radius: 4px;',
);

interface WindowWithCustomCards extends Window {
  customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>;
}

const customCardsWindow = window as unknown as WindowWithCustomCards;
customCardsWindow.customCards = customCardsWindow.customCards || [];
customCardsWindow.customCards.push({
  type: 'air-visual-card',
  name: 'Air Visual Card',
  description: 'A modern, responsive Lovelace card displaying Air Quality Index (AQI) and weather data.',
  preview: true,
});

@customElement('air-visual-card')
export class AirVisualCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config!: AirVisualCardConfig;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('air-visual-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): Record<string, unknown> {
    return {
      air_quality_index: 'sensor.u_s_air_quality_index',
      air_pollution_level: 'sensor.u_s_air_pollution_level',
      main_pollutant: 'sensor.u_s_main_pollutant',
      city: 'San Francisco',
      country: 'US',
      unit_of_measurement: 'AQI',
      layout: 'modern',
      hide_title: false,
      hide_face: false,
      hide_weather: false,
    };
  }

  public setConfig(config: AirVisualCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    if (!config.air_quality_index && !config.air_pollution_level) {
      throw new Error('Please define at least one air quality sensor entity (air_quality_index or air_pollution_level).');
    }

    this._config = {
      unit_of_measurement: 'AQI',
      ...config,
      tap_action: config.tap_action || { action: 'more-info' },
      hold_action: config.hold_action || { action: 'more-info' },
    };
  }

  public get config(): AirVisualCardConfig {
    return this._config;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this._config) {
      return false;
    }

    if (changedProps.has('_config')) {
      return true;
    }

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass || !this.hass) {
      return true;
    }

    const trackedEntities = [
      this._config.air_quality_index,
      this._config.air_pollution_level,
      this._config.main_pollutant,
      this._config.main_pollutant_value,
      this._config.weather,
    ].filter(Boolean) as string[];

    if (trackedEntities.length === 0) {
      return true;
    }

    return trackedEntities.some((entity) => oldHass.states[entity] !== this.hass.states[entity]);
  }

  public getCardSize(): number {
    return this._config?.hide_weather ? 2 : 3;
  }

  public getLayoutOptions() {
    return {
      grid_columns: 2,
      grid_rows: this._config?.hide_weather ? 2 : 3,
      grid_min_columns: 1,
      grid_min_rows: 2,
    };
  }

  private _openMoreInfo(entityId?: string): void {
    if (!entityId || !this.hass) return;
    fireEvent(this, 'hass-more-info', { entityId });
  }

  private _handleCardAction(ev: ActionHandlerEvent): void {
    if (this.hass && this._config && ev.detail.action) {
      const primaryEntity =
        this._config.air_quality_index ||
        this._config.air_pollution_level ||
        this._config.main_pollutant ||
        this._config.main_pollutant_value;

      const actionConfig = {
        entity: primaryEntity,
        ...this._config,
      };

      handleAction(this, this.hass, actionConfig, ev.detail.action);
    }
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const aqiEntity: HassEntity | undefined = this._config.air_quality_index
      ? this.hass.states[this._config.air_quality_index]
      : undefined;

    const aplEntity: HassEntity | undefined = this._config.air_pollution_level
      ? this.hass.states[this._config.air_pollution_level]
      : undefined;

    const pollutantEntity: HassEntity | undefined = this._config.main_pollutant
      ? this.hass.states[this._config.main_pollutant]
      : undefined;

    const pollutantValueEntity: HassEntity | undefined = this._config.main_pollutant_value
      ? this.hass.states[this._config.main_pollutant_value]
      : undefined;

    const weatherEntity: HassEntity | undefined = this._config.weather
      ? this.hass.states[this._config.weather]
      : undefined;

    // Resolve AQI Value & Level
    let aqiNum = NaN;
    if (aqiEntity) {
      aqiNum = parseInt(aqiEntity.state, 10);
    } else if (aplEntity) {
      const parsed = parseInt(aplEntity.state, 10);
      if (!isNaN(parsed)) aqiNum = parsed;
    }

    const validAQI = !isNaN(aqiNum);
    let aqiLevel: AQILevel = validAQI ? getAQILevel(aqiNum) : 1;
    if (!validAQI && aplEntity && STATE_TO_AQI_LEVEL[aplEntity.state.toLowerCase()]) {
      aqiLevel = STATE_TO_AQI_LEVEL[aplEntity.state.toLowerCase()];
    }
    const aqiInfo = AQI_LEVEL_DATA[aqiLevel];

    // Resolve APL label
    let aplText = aqiInfo.label;
    if (aplEntity && isNaN(parseInt(aplEntity.state, 10))) {
      // Try Home Assistant native formatEntityState, then clean fallback
      const formatted = (this.hass as HassWithFormat).formatEntityState?.(aplEntity);
      if (formatted) {
        aplText = formatted;
      } else {
        aplText = aplEntity.state
          .replace(/_/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }
    }

    // Resolve Main Pollutant & Unit
    let pollutantName = '';
    let pollutantUnit = '';
    let pollutantValue = '';

    if (pollutantEntity) {
      const rawPollutant = pollutantEntity.state.toLowerCase();
      const symbol = pollutantEntity.attributes?.pollutant_symbol?.toLowerCase() || rawPollutant;
      pollutantName = POLLUTANT_NAMES[symbol] || POLLUTANT_NAMES[rawPollutant] || pollutantEntity.state;

      pollutantUnit =
        pollutantEntity.attributes?.pollutant_unit ||
        POLLUTANT_UNITS[symbol] ||
        POLLUTANT_UNITS[rawPollutant] ||
        '';
    }

    if (pollutantValueEntity) {
      pollutantValue = pollutantValueEntity.state;
      if (!pollutantUnit && pollutantValueEntity.attributes?.unit_of_measurement) {
        pollutantUnit = pollutantValueEntity.attributes.unit_of_measurement;
      }
      if (!pollutantName) {
        const deviceClass = pollutantValueEntity.attributes?.device_class;
        const entityId = (this._config.main_pollutant_value || '').toLowerCase();
        const friendlyName = String(pollutantValueEntity.attributes?.friendly_name || '').toLowerCase();
        if (
          deviceClass === 'pm25' ||
          entityId.includes('pm2_5') ||
          entityId.includes('pm25') ||
          friendlyName.includes('pm2.5') ||
          friendlyName.includes('pm 2.5') ||
          friendlyName.includes('pm2_5') ||
          friendlyName.includes('particulate matter 2.5')
        ) {
          pollutantName = 'PM2.5';
        } else if (deviceClass === 'pm10' || entityId.includes('pm10') || friendlyName.includes('pm10')) {
          pollutantName = 'PM10';
        } else if (deviceClass === 'o3' || entityId.includes('ozone') || friendlyName.includes('ozone')) {
          pollutantName = 'Ozone';
        } else if (deviceClass === 'co' || entityId.includes('carbon_monoxide')) {
          pollutantName = 'Carbon Monoxide';
        } else if (deviceClass === 'no2' || entityId.includes('nitrogen_dioxide')) {
          pollutantName = 'Nitrogen Dioxide';
        } else if (deviceClass === 'so2' || entityId.includes('sulphur_dioxide') || entityId.includes('sulfur_dioxide')) {
          pollutantName = 'Sulfur Dioxide';
        }
      }
    }

    // Calculate pollutant concentration from AQI if pollutant sensor is selected but value is empty
    const isPollutantValueEmpty =
      !pollutantValue ||
      pollutantValue === 'unknown' ||
      pollutantValue === 'unavailable';

    if (pollutantEntity && isPollutantValueEmpty && validAQI) {
      const calcTarget =
        pollutantEntity.attributes?.pollutant_symbol ||
        pollutantEntity.state ||
        pollutantName;
      const entityUnit = pollutantEntity.attributes?.pollutant_unit;
      const calcResult = calculatePollutantConcentration(calcTarget, aqiNum, entityUnit);
      if (calcResult) {
        pollutantValue = calcResult.value;
        pollutantUnit = calcResult.unit;
      }
    }

    const formattedUnit = pollutantUnit ? pollutantUnit.replace(/ug/gi, 'µg').replace(/m3/gi, 'm³') : '';
    let pollutantDetails = '';
    if (pollutantValue && formattedUnit) {
      pollutantDetails = `${pollutantValue} ${formattedUnit}`;
    } else if (pollutantValue) {
      pollutantDetails = pollutantValue;
    } else if (formattedUnit) {
      pollutantDetails = formattedUnit;
    }

    const cityName = this._config.city || '';
    const unit = this._config.unit_of_measurement || 'AQI';
    const hideTitle = Boolean(this._config.hide_title || !cityName);
    const hideFace = Boolean(this._config.hide_face);
    const hideAQI = Boolean(this._config.hide_aqi);
    const hideAPL = Boolean(this._config.hide_apl);
    const hideWeather = Boolean(this._config.hide_weather || !weatherEntity);
    const isModern =
      this._config.layout === 'modern' ||
      this._config.layout === 'new' ||
      Boolean(this._config.modern_layout);

    // Weather details
    let temp = '';
    let humidity = '';
    let humidityModern = '';
    let wind = '';
    let condition = '';
    if (weatherEntity) {
      condition = weatherEntity.state;
      const t = weatherEntity.attributes?.temperature;
      const tempUnit = this.hass.config?.unit_system?.temperature || '°';
      if (t !== undefined) temp = `${t}${tempUnit}`;

      const h = weatherEntity.attributes?.humidity;
      if (h !== undefined) {
        humidity = `${h}%`;
        humidityModern = `${h} %`;
      }

      const w = weatherEntity.attributes?.wind_speed;
      const speedUnit =
        this._config.speed_unit ||
        weatherEntity.attributes?.wind_speed_unit ||
        (this.hass.config?.unit_system?.length === 'km' ? 'km/h' : 'mph');
      if (w !== undefined) wind = `${w} ${speedUnit}`;
    }

    if (isModern) {
      const modernTopClasses = ['modern-top-grid'];
      if (hideFace && !hideAQI) modernTopClasses.push('no-face');
      if (hideAQI && !hideFace) modernTopClasses.push('no-aqi');
      if (hideFace && hideAQI) modernTopClasses.push('only-status');

      const modernHeader = cityName
        ? `${cityName} air quality index (${unit})`
        : `Air quality index (${unit})`;

      return html`
        <ha-card
          .actionHandler=${actionHandler({
            hasHold: hasAction(this._config.hold_action),
            hasDoubleClick: hasAction(this._config.double_tap_action),
          })}
          @action=${this._handleCardAction}
        >
          <div class="card-container modern-layout ${hideTitle ? 'no-title' : ''}">
            ${!hideTitle
              ? html`<div class="modern-header">${modernHeader}</div>`
              : html``}

            <div
              class="modern-box"
              data-font="${aqiInfo.fontColor.toLowerCase() === '#ffffff' ? 'light' : 'dark'}"
            >
              <div
                class="modern-colored-section"
                style="background-color: ${aqiInfo.bgColor}; color: ${aqiInfo.fontColor};"
              >
                <div class="${modernTopClasses.join(' ')}">
                  ${!hideAQI
                    ? html`
                        <div
                          class="modern-aqi-badge"
                          @click=${() => this._openMoreInfo(this._config.air_quality_index)}
                          title="AQI: ${validAQI ? aqiNum : 'N/A'}"
                        >
                          <div class="modern-aqi-val">${validAQI ? aqiNum : '—'}</div>
                          <div class="modern-aqi-lbl">
                            ${this._config.country ? `${this._config.country} ` : ''}${unit}
                          </div>
                        </div>
                      `
                    : html``}

                  ${!hideAPL
                    ? html`
                        <div
                          class="modern-status-section"
                          @click=${() =>
                            this._openMoreInfo(
                              this._config.main_pollutant_value ||
                              this._config.main_pollutant ||
                              this._config.air_pollution_level
                            )}
                          title="${aplText}"
                        >
                          <div class="modern-status-text">${aplText}</div>
                        </div>
                      `
                    : html``}

                  ${!hideFace
                    ? html`
                        <div
                          class="modern-face-section"
                          @click=${() =>
                            this._openMoreInfo(
                              this._config.air_quality_index || this._config.air_pollution_level
                            )}
                          title="Air Quality: ${aqiInfo.label}"
                        >
                          ${getFaceSvg(aqiLevel)}
                        </div>
                      `
                    : html``}
                </div>

                ${!hideAPL && (pollutantName || pollutantDetails)
                  ? html`
                      <div class="modern-divider"></div>
                      <div
                        class="modern-pollutant-grid"
                        @click=${() =>
                          this._openMoreInfo(
                            this._config.main_pollutant_value ||
                            this._config.main_pollutant ||
                            this._config.air_pollution_level
                          )}
                        title="${pollutantName}: ${pollutantDetails}"
                      >
                        <div class="modern-pollutant-name">
                          Main pollutant: <span class="modern-pollutant-bold">${pollutantName || 'PM2.5'}</span>
                        </div>
                        ${pollutantDetails
                          ? html`<div class="modern-pollutant-val">${pollutantDetails}</div>`
                          : html``}
                      </div>
                    `
                  : html``}
              </div>

              ${!hideWeather && weatherEntity
                ? html`
                    <div
                      class="modern-weather-bar"
                      @click=${() => this._openMoreInfo(this._config.weather)}
                      title="Weather: ${condition}"
                    >
                      <div class="modern-weather-item">
                        ${getWeatherSvg(condition)}
                        <span>${temp}</span>
                      </div>
                      <div class="modern-weather-item">
                        <span
                          style="display: inline-flex; ${weatherEntity.attributes?.wind_bearing !== undefined ? `transform: rotate(${weatherEntity.attributes.wind_bearing}deg);` : ''}"
                        >
                          ${windSvg}
                        </span>
                        <span>${wind}</span>
                      </div>
                      <div class="modern-weather-item humidity-item">
                        ${humiditySvg}
                        <span>${humidityModern}</span>
                      </div>
                    </div>
                  `
                : html``}
            </div>
          </div>
        </ha-card>
      `;
    }

    // Classic Layout
    const gridClasses = ['main-grid'];
    if (hideFace) gridClasses.push('no-face');
    if (hideAPL && !hideFace) gridClasses.push('only-aqi');

    return html`
      <ha-card
        .actionHandler=${actionHandler({
          hasHold: hasAction(this._config.hold_action),
          hasDoubleClick: hasAction(this._config.double_tap_action),
        })}
        @action=${this._handleCardAction}
      >
        <div class="card-container">
          ${!hideTitle
            ? html`<div class="header">${cityName} Air Quality Index</div>`
            : html``}

          <div
            class="${gridClasses.join(' ')}"
            style="background-color: ${aqiInfo.bgColor}; color: ${aqiInfo.fontColor};"
          >
            ${!hideFace
              ? html`
                  <div
                    class="face-section"
                    style="background-color: ${aqiInfo.faceColor}; color: ${aqiInfo.fontColor};"
                    @click=${() => this._openMoreInfo(this._config.air_quality_index || this._config.air_pollution_level)}
                    title="Air Quality: ${aqiInfo.label}"
                  >
                    ${getFaceSvg(aqiLevel)}
                  </div>
                `
              : html``}
            ${!hideAQI
              ? html`
                  <div
                    class="aqi-section"
                    @click=${() => this._openMoreInfo(this._config.air_quality_index)}
                    title="AQI: ${validAQI ? aqiNum : 'N/A'}"
                  >
                    <div class="aqi-value">${validAQI ? aqiNum : '—'}</div>
                    <div class="aqi-unit">${this._config.country ? `${this._config.country} ` : ''}${unit}</div>
                  </div>
                `
              : html``}
            ${!hideAPL
              ? html`
                  <div
                    class="apl-section"
                    @click=${() =>
                      this._openMoreInfo(
                        this._config.main_pollutant_value ||
                        this._config.main_pollutant ||
                        this._config.air_pollution_level
                      )}
                    title="${aplText}"
                  >
                    <div class="apl-badge">${aplText}</div>
                    ${pollutantName || pollutantDetails
                      ? html`
                          <div class="pollutant-badge">
                            ${[pollutantName, pollutantDetails].filter(Boolean).join(' | ')}
                          </div>
                        `
                      : html``}
                  </div>
                `
              : html``}
          </div>

          ${!hideWeather && weatherEntity
            ? html`
                <div
                  class="weather-bar"
                  @click=${() => this._openMoreInfo(this._config.weather)}
                  title="Weather: ${condition}"
                >
                  <div class="weather-item">
                    ${getWeatherSvg(condition)}
                    <span>${temp}</span>
                  </div>
                  <div class="weather-item">
                    ${windSvg}
                    <span>${wind}</span>
                  </div>
                  <div class="weather-item">
                    ${humiditySvg}
                    <span>${humidity}</span>
                  </div>
                </div>
              `
            : html``}
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return cardStyles;
  }
}
