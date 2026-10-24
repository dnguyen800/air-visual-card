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

import { AirVisualCardConfig, AQILevel } from './types';
import {
  CARD_VERSION,
  AQI_LEVEL_DATA,
  POLLUTANT_NAMES,
  POLLUTANT_UNITS,
  getAQILevel,
} from './const';
import { getFaceSvg } from './icons/faces';
import { getWeatherSvg, humiditySvg, windSvg } from './icons/weather';
import { cardStyles } from './styles';
import { actionHandler } from './action-handler-directive';

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
        this._config.main_pollutant;

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
    const aqiLevel: AQILevel = validAQI ? getAQILevel(aqiNum) : 1;
    const aqiInfo = AQI_LEVEL_DATA[aqiLevel];

    // Resolve APL label
    let aplText = aqiInfo.label;
    if (aplEntity && isNaN(parseInt(aplEntity.state, 10))) {
      // If the sensor holds text (e.g. "good", "moderate")
      const localizedKey = `component.sensor.state.airvisual__pollutant_level.${aplEntity.state}`;
      aplText = this.hass.localize?.(localizedKey) || aplEntity.state;
    }

    // Resolve Main Pollutant & Unit
    let pollutantName = '';
    let pollutantUnit = '';
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

    const cityName = this._config.city || '';
    const unit = this._config.unit_of_measurement || 'AQI';
    const hideTitle = Boolean(this._config.hide_title || !cityName);
    const hideFace = Boolean(this._config.hide_face);
    const hideAQI = Boolean(this._config.hide_aqi);
    const hideAPL = Boolean(this._config.hide_apl);
    const hideWeather = Boolean(this._config.hide_weather || !weatherEntity);

    // Weather details
    let temp = '';
    let humidity = '';
    let wind = '';
    let condition = '';
    if (weatherEntity) {
      condition = weatherEntity.state;
      const t = weatherEntity.attributes?.temperature;
      const tempUnit = this.hass.config?.unit_system?.temperature || '°';
      if (t !== undefined) temp = `${t}${tempUnit}`;

      const h = weatherEntity.attributes?.humidity;
      if (h !== undefined) humidity = `${h}%`;

      const w = weatherEntity.attributes?.wind_speed;
      const speedUnit =
        this._config.speed_unit ||
        weatherEntity.attributes?.wind_speed_unit ||
        (this.hass.config?.unit_system?.length === 'km' ? 'km/h' : 'mph');
      if (w !== undefined) wind = `${w} ${speedUnit}`;
    }

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
                      this._openMoreInfo(this._config.main_pollutant || this._config.air_pollution_level)}
                    title="${aplText}"
                  >
                    <div class="apl-badge">${aplText}</div>
                    ${pollutantName
                      ? html`
                          <div class="pollutant-badge">
                            ${pollutantName}${pollutantUnit ? ` | ${pollutantUnit}` : ''}
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
                    ${humiditySvg}
                    <span>${humidity}</span>
                  </div>
                  <div class="weather-item">
                    ${windSvg}
                    <span>${wind}</span>
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
