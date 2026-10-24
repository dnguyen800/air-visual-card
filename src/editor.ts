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

  private _schema = [
    {
      name: 'air_quality_index',
      required: false,
      selector: { entity: { domain: 'sensor' } },
    },
    {
      name: 'air_pollution_level',
      required: false,
      selector: { entity: { domain: 'sensor' } },
    },
    {
      name: 'main_pollutant',
      required: false,
      selector: { entity: { domain: 'sensor' } },
    },
    {
      name: 'weather',
      required: false,
      selector: { entity: { domain: 'weather' } },
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

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const data = {
      ...this._config,
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
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      air_quality_index: 'Air Quality Index Sensor',
      air_pollution_level: 'Air Pollution Level Sensor',
      main_pollutant: 'Main Pollutant Sensor',
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

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) {
      return;
    }
    const newConfig = { ...this._config, ...ev.detail.value };

    // Clean empty strings
    Object.keys(newConfig).forEach((key) => {
      if (newConfig[key] === '' || newConfig[key] === undefined) {
        delete newConfig[key];
      }
    });

    this._config = newConfig;
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-form {
        display: block;
      }
    `;
  }
}
