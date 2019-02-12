class AirVisualCard extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    setConfig(config) {
      if (!config.air_pollution_level || config.air_pollution_level.split('.')[0] !== 'sensor') {
        throw new Error("Please include the 'air pollution level' sensor.");
      }
      if (!config.air_quality_index || config.air_quality_index.split('.')[0] !== 'sensor')  {
        throw new Error("Please include the 'air quality index' sensor.");
      }
      if (!config.main_pollutant || config.main_pollutant.split('.')[0] !== 'sensor')  {
        throw new Error("Please include the 'main pollutant' sensor.");
      }
      if (!config.city) {
        config.city = '';
      }

      if (!config.svg_location) {
        config.svg_location = 'default';
      }

      if (!config.temp) {
        config.temp = '';
      }
      
      const root = this.shadowRoot;
      if (root.lastChild) root.removeChild(root.lastChild);
  
      const cardConfig = Object.assign({}, config);
      if (!cardConfig.title) {
        cardConfig.title = `Air Quality Index`;
      } 
    
      const card = document.createElement('ha-card');
      const content = document.createElement('div');
      const style = document.createElement('style');

      style.textContent = `
        ha-card {
          /* sample css */
        }
     
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        .grid-container {
          display: grid;
          grid-template-columns: auto auto auto;
          grid-gap: 0;
        }

        .city {
          grid-column-start: 1;
          grid-column-end: 3;
          text-align: left;
          text-indent: 0.3em;
          color: #414141;
          font-size: 1.8em;
          font-weight: 300;
          padding: .2em .2em;      
        }

        .temp {
          grid-column-start: 3;
          grid-column-end: 4;
          background-color: #FFFFFF;
          text-align: right;
          font-size: 1.7em;
          font-weight: 300;
          color: #414141;
          padding: .2em .2em;       
        }
  
        .face {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 1;
          grid-column-end: 2;
          justify-items: center;
          align-items: center;
          display: grid;                  
          width: 4.5em;      
        }

        .face img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          height: 4.5em;
          width: auto;  
        }
  
        .aqi {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 2;
          grid-column-end: 3;
          padding: 0.3em 0.3em;
          height: 5em;
          line-height: 1.1;
          text-align: center;
          justify-items: center;       
          margin: auto;         
        }

        .apl {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 3;
          grid-column-end: 4;
          text-align: center;
          line-height: 1;
          padding: .1em .1em;
          font-size: 1.8em;      
          margin: auto;    
        }  

        .pollutant {
          float: center;
          border: 0;
          padding: .1em .1em;         
          background-color: white;
          border-radius: 4px;       
          font-size: 0.4em;
          font-weight: bold;        
        }
      `
      content.innerHTML = `
      <div id='content'>
      </div>
      `;
      
      if (config.show_title) {
        card.header = cardConfig.title;
      }
      card.appendChild(content);
      card.appendChild(style);
      root.appendChild(card);
      this._config = cardConfig;
    }
  
 
    set hass(hass) {
      const config = this._config;
      const root = this.shadowRoot;
      const card = root.lastChild;
      this.myhass = hass;
      const air_pollution_level = hass.states[config.air_pollution_level].state;
      const air_quality_index = hass.states[config.air_quality_index].state;
      const main_pollutant = hass.states[config.main_pollutant].state;  
      const svg_location = config.svg_location;
      const city = config.city || '';
      const faceIcon = {
        '1': 'mdi:emoticon-excited',
        '2': 'mdi:emoticon-happy',
        '3': 'mdi:emoticon-neutral',
        '4': 'mdi:emoticon-sad',
        '5': 'mdi:emoticon-poop',
        '6': 'mdi:emoticon-dead'
      };
      const AQIbgColor = {
        '1': `#A8E05F`,
        '2': '#FDD74B',
        '3': '#FE9B57',
        '4': '#FE6A69',
        '5': '#A97ABC',
        '6': '#A87383',
      }
      const AQIfaceColor = {
        '1': `#B0E867`,
        '2': '#E3C143',
        '3': '#E48B4E',
        '4': '#E45F5E',
        '5': '#986EA9',
        '6': '#A5516B',
      }
      const AQIfontColor = {
        '1': `#718B3A`,
        '2': '#A57F23',
        '3': '#B25826',
        '4': '#AF2C3B',
        '5': '#634675',
        '6': '#683E51',
      }

      const weatherIcons = {
        'clear-night': 'mdi:weather-night',
        'cloudy': 'mdi:weather-cloudy',
        'fog': 'mdi:weather-fog',
        'hail': 'mdi:weather-hail',
        'lightning': 'mdi:weather-lightning',
        'lightning-rainy': 'mdi:weather-lightning-rainy',
        'partlycloudy': 'mdi:weather-partlycloudy',
        'pouring': 'mdi:weather-pouring',
        'rainy': 'mdi:weather-rainy',
        'snowy': 'mdi:weather-snowy',
        'snowy-rainy': 'mdi:weather-snowy-rainy',
        'sunny': 'mdi:weather-sunny',
        'windy': 'mdi:weather-windy',
        'windy-variant': `mdi:weather-windy-variant`,
        'exceptional': '!!',
      }

      
      let currentCondition = '';
      let faceHTML = '';
      let temp = '';
      if (config.temp.split('.')[0] == 'sensor') {
        temp = hass.states[config.temp].state;
        temp += 'º';
      }
      else if (config.temp.split('.')[0] == 'weather') {
        temp = hass.states[config.temp].attributes['temperature'];     
        temp += 'º';  
        currentCondition = hass.states[config.temp].state;
      }
        



      let getAQI = function () {
        var AQIlevel = ``;
        switch (true) {
          case (air_quality_index < 50):
            return AQIlevel = '1';
          case (air_quality_index < 100):
            return AQIlevel = '2';
          case (air_quality_index < 150):
            return AQIlevel = '3';
          case (air_quality_index < 200):
            return AQIlevel = '4';
          case (air_quality_index < 300):
            return AQIlevel = '5';
          case (air_quality_index < 9999):
            return AQIlevel = '6';
          default:
            return AQIlevel = '1';
        }
      };

      if (config.svg_location != 'default') {
        faceHTML = `<img src="${svg_location}/ic-face-${getAQI()}.svg"></img>`;
      }
      else {
        faceHTML = `<ha-icon style="color:${AQIfontColor[getAQI()]}; width: 4.5em; height: 4.5em;" icon="${faceIcon[getAQI()]}"></ha-icon>`;
      }

      let card_content = ''     
      card_content += `
        <div class="grid-container" style="background-color: ${AQIbgColor[getAQI()]};">
          <div class="city" style="background-color: #FFFFFF;">${city}</div>
          <div class="temp"><ha-icon icon="${weatherIcons[currentCondition]}"></ha-icon>   ${temp}</div>
          <div class="face" style="background-color: ${AQIfaceColor[getAQI()]};">`
      card_content += faceHTML;
      card_content += `
          </div>  
          <div class="aqi" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
            <div style="font-size:3em;">${air_quality_index}</div>
            US AQI
          </div>
          <div class="apl" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
            ${air_pollution_level}
            <br>
            <div class="pollutant">
              ${main_pollutant}
            </div>
          </div>
        </div> 
      `      
    root.lastChild.hass = hass;
    root.getElementById('content').innerHTML = card_content;      
    }
    getCardSize() {
      return 1;
    }
}
  
customElements.define('air-visual-card', AirVisualCard);