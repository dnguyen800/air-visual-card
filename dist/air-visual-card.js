// To study:
// Plant Picture Card: https://github.com/badguy99/PlantPictureCard/blob/master/dist/PlantPictureCard.js
// UPDATE FOR EACH RELEASE!!! From aftership-card. Version # is hard-coded for now.
console.info(
  '%c  AIR-VISUAL-CARD  \n%c  Version 2.0.5',
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// From weather-card
const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

let oldStates = {};

class AirVisualCard extends HTMLElement {
  static async getConfigElement() {
    await import("./air-visual-card-editor.js");
    return document.createElement("air-visual-card-editor");
  }

  static getStubConfig() {
    return {
      air_pollution_level: "sensor.u_s_air_pollution_level",
      air_quality_index: "sensor.u_s_air_quality_index",
      main_pollutant: "sensor.u_s_main_pollutant",
      weather: "",
      hide_weather: 1,
      hide_title: 1,
      unit_of_measurement: "AQI",
      hide_face: 0
    };
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    const root = this.shadowRoot;
    if (root.lastChild) root.removeChild(root.lastChild);

    if (
      !config.air_quality_index ||
      typeof config.air_quality_index !== "string" ||
      config.air_quality_index.split('.')[0] !== "sensor"
    ) {
      throw new Error('Please define a sensor entity.');
    }

    const cardConfig = Object.assign({}, config);
    const card = document.createElement('ha-card');
    const content = document.createElement('div');
    const style = document.createElement('style');

    style.textContent = `
      ha-card {
        background-color: rgba(0,0,0,0);
        box-shadow: none;
        overflow: hidden;
      }

      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      .grid-container {
        display: grid;
        grid-template-areas: "city city city" "face aqiSensor aplSensor" "face country mainPollutantSensor" "temp humidity wind";
        grid-template-columns: 85px 30% auto;
        grid-template-rows: auto auto auto auto;
        grid-gap: 0;
        text-align: center;
      }

      .city {
        grid-area: city;
        font-size: 1.6em;
        font-weight: bold;
        color: var(--primary-text-color);
        filter: opacity(80%);
        padding-bottom: 5px;
      }

      .face {
        border-radius: var(--ha-card-border-radius) 0px 0px ${cardConfig.hide_weather ? 'var(--ha-card-border-radius)' : '0px'};
        grid-area: face;
        justify-items: center;
        align-items: center;
        display: grid;
      }

      .face img {
        display: block;
        height: 60px;
      }

      .aqiSensor {
        grid-area: aqiSensor;
        font-size: 3em;
        height: 60px;
        padding-top: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${cardConfig.hide_face ? 'var(--ha-card-border-radius)' : '0px'} 0px 0px 0px;
      }

      .aplSensor {
        grid-area: aplSensor;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px var(--ha-card-border-radius) 0px 0px;
      }

      .mainPollutantSensor {
        grid-area: mainPollutantSensor;
        border-radius: 0px 0px ${cardConfig.hide_weather ? 'var(--ha-card-border-radius)' : '0px'} 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 0px 5px 0px;
      }

      .mainPollutantSensorText {
        background-color: white;
        border-radius: 4px;
        font-size: 0.9em;
        font-weight: bold;
        width: 70%;
      }

      .country {
        grid-area: country;
        border-radius: 0px 0px 0px ${cardConfig.hide_face ? 'var(--ha-card-border-radius)' : '0px'};
      }

      .temp {
        grid-area: temp;
        text-align: left;
        font-size: 1.2em;
        background-color: rgba(255,255,255,0.2);
        color: var(--text-color);
        border-radius: 0px 0px 0px var(--ha-card-border-radius);
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        border-left: 1px solid rgba(230, 230, 230, 1);
        border-right: 1px solid rgba(230, 230, 230, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .temp img {
        width: 34px;
        padding-right: 2px;
      }

      .humidity {
        grid-area: humidity;
        color: var(--text-color);
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        background-color: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0px 5px 0px;
      }

      .humidity img {
        height: 25px;
        padding-right: 2px;
      }

      .wind {
        grid-area: wind;
        background-color: rgba(255,255,255,0.2);
        color: var(--text-color);
        border-radius: 0px 0px var(--ha-card-border-radius) 0px;
        border-bottom: 1px solid rgba(230, 230, 230, 1);
        border-right: 1px solid rgba(230, 230, 230, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .wind img {
        height: 14px;
        padding-right: 2px;
      }
    `;

    content.innerHTML = `
      <div id="content"></div>
    `;

    card.appendChild(content);
    card.appendChild(style);
    root.appendChild(card);
    oldStates = {};
    this._config = cardConfig;
  }

  shouldNotUpdate(config, hass) {
    let clone = JSON.parse(JSON.stringify(config));

    delete clone["city"];
    delete clone["country"];
    delete clone["type"];
    delete clone["icons"];
    delete clone["hide_title"];
    delete clone["hide_face"];
    delete clone["hide_weather"];
    delete clone["hide_aqi"];
    delete clone["hide_apl"];
    delete clone["weather"];
    delete clone["speed_unit"];
    delete clone["unit_of_measurement"];

    let states = {};
    for (let entity of Object.values(clone)) {
      if (typeof entity === "string" && entity.includes(".")) {
        states[entity] = hass.states[entity];
      }
    }

    if (JSON.stringify(oldStates) === JSON.stringify(states)) {
      return true;
    }

    oldStates = states;
    return false;
  }

  set hass(hass) {
    const config = this._config;
    const root = this.shadowRoot;
    const card = root.lastChild;

    if (this.shouldNotUpdate(config, hass)) {
      return;
    }

    const hideTitle = config.hide_title ? 1 : 0;
    const hideFace = config.hide_face ? 1 : 0;
    const hideAQI = config.hide_aqi ? 1 : 0;
    const hideAPL = config.hide_apl ? 1 : 0;
    const hideWeather = config.hide_weather || !config.weather ? 1 : 0;
    const speedUnit = config.speed_unit || '';
    const iconDirectory = config.icons || "/hacsfiles/air-visual-card";
    const country = config.country || '';
    const city = config.city || '';
    const weatherEntity = config.weather || '';

    const aqiSensor = { name: 'aqiSensor', config: config.air_quality_index || null, value: 0 };
    const aplSensor = { name: 'aplSensor', config: config.air_pollution_level || null, value: 0 };
    const mainPollutantSensor = { name: 'mainPollutantSensor', config: config.main_pollutant || null, value: '' };

    const validPollutants = ['co', 'no2', 'o3', 'so2', 'pm10', 'pm25', 'neph'];
    const unitOfMeasurement = config.unit_of_measurement || 'AQI';

    const AQIbgColor = {
      '1': '#B0E867',
      '2': '#E3C143',
      '3': '#E48B4E',
      '4': '#E45F5E',
      '5': '#986EA9',
      '6': '#A5516B',
    };

    const AQIfaceColor = {
      '1': '#A8E05F',
      '2': '#FDD64B',
      '3': '#FF9B57',
      '4': '#FE6A69',
      '5': '#A97ABC',
      '6': '#A87383',
    };

    const AQIfontColor = {
      '1': '#718B3A',
      '2': '#A57F23',
      '3': '#B25826',
      '4': '#AF2C3B',
      '5': '#634675',
      '6': '#683E51',
    };

    const weatherSVG = {
      'clear-night': 'night-clear-sky',
      'cloudy': 'scattered-clouds',
      'fog': 'scattered-clouds',
      'hail': 'rain',
      'lightning': 'rain',
      'lightning-rainy': 'rain',
      'partlycloudy': 'new-clouds',
      'pouring': 'rain',
      'rainy': 'rain',
      'snowy': 'snow',
      'snowy-rainy': 'snow',
      'sunny': 'clear-sky',
      'windy': 'scattered-clouds',
      'windy-variant': 'scattered-clouds',
      'exceptional': 'snow',
    };

    // WAQI/AirVisual support
    const APLdescription = {
      '1': 'Good',
      '2': 'Moderate',
      '3': 'Unhealthy for Sensitive Groups',
      '4': 'Unhealthy',
      '5': 'Very Unhealthy',
      '6': 'Hazardous',
    };

    const mainPollutantValue = {
      'p2': 'PM2.5',
      'pm25': 'PM2.5',
      'pm10': 'PM10',
      'o3': 'Ozone',
      'no2': 'Nitrogen Dioxide',
      'so2': 'Sulfur Dioxide',
      'co': 'Carbon Monoxide',
      'neph': 'Neph',
    };

    const mainAirVisualPollutantValue = {
      'p2': 'PM2.5',
      'p1': 'PM10',
      'co': 'Carbon Monoxide',
      'o3': 'Ozone',
      'n2': 'Nitrogen Dioxide',
      's2': 'Sulfur Dioxide',
    };

    const mainPollutantUnit = {
      'co': 'ppm',
      'no2': 'ppb',
      'o3': 'ppb',
      'so2': 'ppb',
      'pm10': 'µg/m³',
      'pm25': 'µg/m³',
      'neph': '1/Mm',
    };

    let currentCondition = '';
    let humidity = '';
    let windSpeed = '';
    let tempValue = '';
    let pollutantUnit = '';
    let apl = '';
    let mainPollutant = '';
    let speed_unit = speedUnit;

    const getAQI = function () {
      switch (true) {
        case (aqiSensor.value <= 50):
          return '1';
        case (aqiSensor.value <= 100):
          return '2';
        case (aqiSensor.value <= 150):
          return '3';
        case (aqiSensor.value <= 200):
          return '4';
        case (aqiSensor.value <= 300):
          return '5';
        case (aqiSensor.value > 300):
          return '6';
        default:
          return '1';
      }
    };

    if (
      weatherEntity &&
      hass.states[weatherEntity] &&
      hass.states[weatherEntity].attributes &&
      typeof hass.states[weatherEntity].attributes['wind_speed_unit'] !== "undefined"
    ) {
      speed_unit = hass.states[weatherEntity].attributes['wind_speed_unit'];
    }

    // Main pollutant support:
    // 1) AirVisual style entity with pollutant_symbol/pollutant_unit
    // 2) WAQI style entity with state = o3/pm25/etc
    // 3) worlds_air_quality_index style with AQI attribute dominentpol
    if (mainPollutantSensor.config && typeof hass.states[mainPollutantSensor.config] !== "undefined") {
      const entity = hass.states[mainPollutantSensor.config];
      const mpParse = entity.state;

      if (typeof entity.attributes['pollutant_unit'] !== "undefined") {
        pollutantUnit = entity.attributes['pollutant_unit'];
        mainPollutant = mainAirVisualPollutantValue[entity.attributes['pollutant_symbol']] || entity.attributes['pollutant_symbol'] || '';

      } else if (validPollutants.includes(mpParse)) {
        mainPollutant = mainPollutantValue[mpParse] || mpParse;
        pollutantUnit = mainPollutantUnit[mpParse] || 'AQI';

      } else if (
        aqiSensor.config &&
        typeof hass.states[aqiSensor.config] !== "undefined" &&
        hass.states[aqiSensor.config].attributes &&
        hass.states[aqiSensor.config].attributes['dominentpol']
      ) {
        const dominant = hass.states[aqiSensor.config].attributes['dominentpol'];

        if (validPollutants.includes(dominant)) {
          mainPollutant = mainPollutantValue[dominant] || dominant;
          // Prefer actual measurement entity unit if available, fallback to static map
          pollutantUnit = entity.attributes['unit_of_measurement'] || mainPollutantUnit[dominant] || '';
        } else {
          mainPollutant = dominant;
          pollutantUnit = entity.attributes['unit_of_measurement'] || '';
        }

      } else {
        pollutantUnit = 'pollutant unit';
        mainPollutant = 'main pollutant';
      }
    } else if (
      aqiSensor.config &&
      typeof hass.states[aqiSensor.config] !== "undefined" &&
      hass.states[aqiSensor.config].attributes &&
      hass.states[aqiSensor.config].attributes['dominentpol']
    ) {
      const dominant = hass.states[aqiSensor.config].attributes['dominentpol'];
      mainPollutant = mainPollutantValue[dominant] || dominant || '';
      pollutantUnit = mainPollutantUnit[dominant] || '';
    }

    // APL / AQI handling
    if (aqiSensor.config && typeof hass.states[aqiSensor.config] !== "undefined") {
      const parsedAQI = parseInt(hass.states[aqiSensor.config].state, 10);
      if (!isNaN(parsedAQI)) {
        aqiSensor.value = parsedAQI;
      }
    }

    if (aplSensor.config && typeof hass.states[aplSensor.config] !== "undefined") {
      const aplParse = parseInt(hass.states[aqiSensor.config].state, 10);

      if (!isNaN(aplParse)) {
        aqiSensor.value = aplParse;
        apl = APLdescription[getAQI()];
      } else {
        const aplState = hass.states[aplSensor.config].state;
        apl = hass.localize("component.sensor.state.airvisual__pollutant_level." + aplState);
      }
    } else if (aqiSensor.config && typeof hass.states[aqiSensor.config] !== "undefined") {
      apl = APLdescription[getAQI()];
    }

    let card_content = `<div class="grid-container">`;

    if (!hideTitle) {
      card_content += `<div class="city">${city} Air Quality Index</div>`;
    }

    if (
      weatherEntity &&
      weatherEntity.split('.')[0] === 'weather' &&
      hass.states[weatherEntity]
    ) {
      const weatherState = hass.states[weatherEntity];
      const attrs = weatherState.attributes || {};
    
      tempValue = attrs.temperature !== undefined ? `${attrs.temperature}º` : '';
      currentCondition = String(weatherState.state || '').trim().toLowerCase();
      humidity = attrs.humidity !== undefined ? `${attrs.humidity}%` : '';
      windSpeed = attrs.wind_speed !== undefined ? `${attrs.wind_speed} ${speed_unit}` : '';
    }

    if (!hideWeather) {
      const weatherIcon = weatherSVG[currentCondition] || 'new-clouds';
      const weatherIconSrc = `${iconDirectory}/ic-w-${weatherIcon}.svg`;
    
      card_content += `
        <div class="temp" id="temp">
          <img
            src="${weatherIconSrc}"
            alt="${currentCondition}"
            title="${currentCondition} → ${weatherIconSrc}"
            onerror="this.replaceWith(document.createTextNode('☁'))"
          >${tempValue}
        </div>
        <div class="humidity" id="humidity">
          ${humidity ? `<img src="${iconDirectory}/ic-humidity.svg"></img>${humidity}` : ``}
        </div>
        <div class="wind" id="wind">
          ${windSpeed ? `<img src="${iconDirectory}/ic-wind.svg"></img> ${windSpeed}` : ``}
        </div>
      `;
    }

    if (!hideFace) {
      card_content += `
        <div class="face" id="face" style="background-color: ${AQIfaceColor[getAQI()]};">
          <img src="${iconDirectory}/ic-face-${getAQI()}.svg"></img>
        </div>
      `;
    }

    if (!hideAQI) {
      card_content += `
        <div class="aqiSensor" id="aqiSensor" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
          ${aqiSensor.value}
        </div>
        <div class="country" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">${country} ${unitOfMeasurement}</div>
      `;
    }

    if (!hideAPL) {
      card_content += `
        <div class="aplSensor" id="aplSensor" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
          ${apl}
        </div>
        <div class="mainPollutantSensor" id="mainPollutantSensor" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
          <div class="mainPollutantSensorText">${mainPollutant} | ${pollutantUnit}</div>
        </div>
      `;
    }

    card_content += `</div>`;

    root.lastChild.hass = hass;
    root.querySelector('#content').innerHTML = card_content;

    // Click handlers
    if (!hideFace) {
      const el = card.querySelector('#face');
      if (el) {
        el.addEventListener('click', () => {
          fireEvent(this, "hass-more-info", { entityId: aqiSensor.config });
        });
      }
    }

    if (!hideAQI) {
      const el = card.querySelector('#aqiSensor');
      if (el) {
        el.addEventListener('click', () => {
          fireEvent(this, "hass-more-info", { entityId: aqiSensor.config });
        });
      }
    }

    if (!hideAPL) {
      const aplEl = card.querySelector('#aplSensor');
      if (aplEl) {
        aplEl.addEventListener('click', () => {
          fireEvent(this, "hass-more-info", { entityId: aplSensor.config || aqiSensor.config });
        });
      }

      const mpEl = card.querySelector('#mainPollutantSensor');
      if (mpEl) {
        mpEl.addEventListener('click', () => {
          fireEvent(this, "hass-more-info", { entityId: mainPollutantSensor.config || aqiSensor.config });
        });
      }
    }
  }

  getCardSize() {
    return 1;
  }
}

customElements.define('air-visual-card', AirVisualCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'air-visual-card',
  name: 'Air Visual Card',
  preview: false,
  description: 'This is a Home Assistant Lovelace card that uses the AirVisual Sensor to provide air quality index (AQI) data and creates a card like the ones found on AirVisual website. Requires the AirVisual Sensor to be setup. Tested with Yahoo and Darksky Weather component.'
});
