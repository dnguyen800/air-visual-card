import { LitElement, html, TemplateResult, CSSResultGroup, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
import { AirVisualCardConfig } from './types';

@customElement('air-visual-card-editor')
export class AirVisualCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private _config?: AirVisualCardConfig;

  public setConfig(config: AirVisualCardConfig): void {
    this._config = config;
  }

  private get _schema() {
    const preset = this._config?.integration_preset;
    const isIntegration = Boolean(preset && preset !== 'manual');

    // Filter sensor selectors to the chosen integration when not manual/custom
    const sensorSelector = isIntegration
      ? { entity: { domain: 'sensor', integration: preset } }
      : { entity: { domain: 'sensor' } };

    // Filter weather selector if integration provides a weather entity
    const weatherSelector =
      preset === 'openweathermap'
        ? { entity: { domain: 'weather', integration: 'openweathermap' } }
        : { entity: { domain: 'weather' } };

    return [
      {
        name: 'integration_preset',
        required: false,
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { label: 'Manual / Custom', value: 'manual' },
              { label: 'OpenWeatherMap', value: 'openweathermap' },
              { label: 'AirVisual (IQAir)', value: 'airvisual' },
              { label: 'WAQI (World Air Quality Index)', value: 'waqi' },
            ],
          },
        },
      },
      {
        name: 'air_quality_index',
        required: false,
        selector: sensorSelector,
      },
      {
        name: 'air_pollution_level',
        required: false,
        selector: sensorSelector,
      },
      {
        name: 'main_pollutant',
        required: false,
        selector: sensorSelector,
      },
      {
        name: 'main_pollutant_value',
        required: false,
        selector: sensorSelector,
      },
      {
        name: 'weather',
        required: false,
        selector: weatherSelector,
      },
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'city', selector: { text: {} } },
          { name: 'country', selector: { text: {} } },
        ],
      },
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'unit_of_measurement', selector: { text: {} } },
          { name: 'speed_unit', selector: { text: {} } },
        ],
      },
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'hide_title', selector: { boolean: {} } },
          { name: 'hide_face', selector: { boolean: {} } },
          { name: 'hide_weather', selector: { boolean: {} } },
          { name: 'hide_aqi', selector: { boolean: {} } },
          { name: 'hide_apl', selector: { boolean: {} } },
        ],
      },
    ];
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const data = {
      integration_preset: this._config.integration_preset || 'manual',
      ...this._config,
      air_quality_index: this._config.air_quality_index || '',
      air_pollution_level: this._config.air_pollution_level || '',
      main_pollutant: this._config.main_pollutant || '',
      main_pollutant_value: this._config.main_pollutant_value || '',
      weather: this._config.weather || '',
      hide_title: this._config.hide_title ?? false,
      hide_face: this._config.hide_face ?? false,
      hide_weather: this._config.hide_weather ?? false,
      hide_aqi: this._config.hide_aqi ?? false,
      hide_apl: this._config.hide_apl ?? false,
      unit_of_measurement: this._config.unit_of_measurement || 'AQI',
      country: this._config.country || '',
      city: this._config.city || '',
    };

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      integration_preset: 'Integration Preset / Auto-Fill',
      air_quality_index: 'Air Quality Index Sensor',
      air_pollution_level: 'Air Pollution Level Sensor',
      main_pollutant: 'Main Pollutant Sensor',
      main_pollutant_value: 'Main Pollutant Value Sensor',
      weather: 'Weather Entity (Optional)',
      city: 'City Name',
      country: 'Country / Standard Label',
      unit_of_measurement: 'AQI Unit (Default: AQI)',
      speed_unit: 'Wind Speed Unit Override',
      hide_title: 'Hide City Title',
      hide_face: 'Hide Face Icon',
      hide_weather: 'Hide Weather Forecast Bar',
      hide_aqi: 'Hide AQI Value Badge',
      hide_apl: 'Hide Pollution Level & Pollutant',
    };
    return labels[schema.name] || schema.name;
  };

  private _computeHelper = (schema: { name: string }): string => {
    const helpers: Record<string, string> = {
      integration_preset:
        'Select an integration to automatically detect and pre-fill linked sensors from your Home Assistant setup',
    };
    return helpers[schema.name] || '';
  };

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) {
      return;
    }

    const currentPreset = this._config.integration_preset || 'manual';
    const selectedPreset = ev.detail.value.integration_preset;

    const newConfig = { ...this._config, ...ev.detail.value };

    // When changing between preset options, clear out previous sensor selector values
    if (selectedPreset && selectedPreset !== currentPreset) {
      delete newConfig.air_quality_index;
      delete newConfig.air_pollution_level;
      delete newConfig.main_pollutant;
      delete newConfig.main_pollutant_value;
      delete newConfig.weather;
      delete newConfig.city;

      if (selectedPreset !== 'manual') {
        this._applyIntegrationPreset(selectedPreset, newConfig);
      }
    }

    // Clean empty strings
    Object.keys(newConfig).forEach((key) => {
      if (newConfig[key] === '' || newConfig[key] === undefined) {
        delete newConfig[key];
      }
    });

    this._config = newConfig;
    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _applyIntegrationPreset(preset: string, config: AirVisualCardConfig): void {
    if (!this.hass) return;

    const entityRegistry = (this.hass as any).entities as
      | Record<string, { platform?: string; device_id?: string; translation_key?: string }>
      | undefined;
    const states = this.hass.states;
    const allEntityIds = Object.keys(states);

    // Filter entities belonging to the selected platform / integration
    const platformEntities = allEntityIds.filter((id) => {
      const reg = entityRegistry?.[id];
      const attribution = String(states[id]?.attributes?.attribution || '').toLowerCase();
      return (
        reg?.platform === preset ||
        id.toLowerCase().includes(preset) ||
        attribution.includes(preset)
      );
    });

    if (preset === 'openweathermap') {
      // 1. Air Quality Index Sensor
      const aqiSensor = platformEntities.find((id) => {
        const state = states[id];
        return (
          state?.attributes?.device_class === 'aqi' ||
          id.includes('air_quality_index') ||
          id.includes('air_pollution') ||
          id.includes('aqi')
        );
      });
      if (aqiSensor) {
        config.air_quality_index = aqiSensor;
      }

      // OpenWeatherMap has no Air Pollution Level text sensor - leave blank
      delete config.air_pollution_level;
      delete config.main_pollutant;

      // 2. Weather Entity
      const weatherEntity = allEntityIds.find((id) => {
        if (!id.startsWith('weather.')) return false;
        const reg = entityRegistry?.[id];
        return (
          reg?.platform === 'openweathermap' ||
          id.toLowerCase().includes('openweathermap') ||
          String(states[id]?.attributes?.attribution || '').toLowerCase().includes('openweathermap')
        );
      });
      if (weatherEntity) {
        config.weather = weatherEntity;
      }

      // 3. Main Pollutant Value Sensor (Preselect PM2.5 sensor as the most common)
      const pm25Sensor = platformEntities.find((id) => {
        const state = states[id];
        const friendly = String(state?.attributes?.friendly_name || '').toLowerCase();
        const translationKey = entityRegistry?.[id]?.translation_key;
        return (
          state?.attributes?.device_class === 'pm25' ||
          translationKey === 'particulate_matter_2_5' ||
          translationKey === 'pm2_5' ||
          translationKey === 'pm25' ||
          friendly.includes('pm2.5') ||
          friendly.includes('pm 2.5') ||
          friendly.includes('pm2_5') ||
          friendly.includes('particulate matter 2.5') ||
          id.includes('particulate_matter_2_5') ||
          id.includes('pm2_5') ||
          id.includes('pm25')
        );
      });
      if (pm25Sensor) {
        config.main_pollutant_value = pm25Sensor;
      }

      // 4. Default City Name (if not set)
      if (!config.city) {
        const friendly =
          (weatherEntity && states[weatherEntity]?.attributes?.friendly_name) ||
          (aqiSensor && states[aqiSensor]?.attributes?.friendly_name);
        if (friendly) {
          const cleanCity = friendly.replace(/open\s*weather\s*map/gi, '').replace(/^[-_\s]+|[-_\s]+$/g, '');
          if (cleanCity) config.city = cleanCity;
        }
      }
    } else if (preset === 'airvisual') {
      const aqiSensor = platformEntities.find(
        (id) => states[id]?.attributes?.device_class === 'aqi' || id.includes('air_quality_index')
      );
      if (aqiSensor) config.air_quality_index = aqiSensor;

      const aplSensor = platformEntities.find((id) => id.includes('air_pollution_level'));
      if (aplSensor) config.air_pollution_level = aplSensor;

      const mpSensor = platformEntities.find((id) => id.includes('main_pollutant') && !id.includes('value'));
      if (mpSensor) config.main_pollutant = mpSensor;

      if (!config.city && aqiSensor) {
        const cityAttr = states[aqiSensor]?.attributes?.city;
        if (cityAttr) config.city = String(cityAttr);
      }
    } else if (preset === 'waqi') {
      const aqiSensor = platformEntities.find(
        (id) => states[id]?.attributes?.device_class === 'aqi' || id.includes('air_quality') || id.includes('aqi')
      );
      if (aqiSensor) config.air_quality_index = aqiSensor;

      const pm25Sensor = platformEntities.find(
        (id) => states[id]?.attributes?.device_class === 'pm25' || id.includes('pm2_5') || id.includes('pm25')
      );
      if (pm25Sensor) config.main_pollutant_value = pm25Sensor;
    }
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-form {
        display: block;
      }
    `;
  }
}
