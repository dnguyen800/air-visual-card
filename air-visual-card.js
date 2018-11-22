class AirVisualCard extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    setConfig(config) {
      if (!config.air_pollution_level) {
        throw new Error("Please include the 'air pollution level' AirVisual sensor.");
      }
      if (!config.air_quality_index) {
        throw new Error("Please include the 'air quality index' AirVisual sensor.");
      }
      if (!config.main_pollutant) {
        throw new Error("Please include the 'main pollutant' AirVisual sensor.");
      }
      if (!config.city) {
        config.city = ``;
      }

      if (!config.temp) {
        config.temp = ``;
      }
      
      const root = this.shadowRoot;
      if (root.lastChild) root.removeChild(root.lastChild);
    
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
          text-indent: 0.5em;
          color: #414141;
          font-size: 1.8em;
          font-weight: 300;
          height: 1em;
          padding: .2em .2em;      
        }

        .temp {
          grid-column-start: 3;
          grid-column-end: 4;
          justify-items: center;
          background-color: #FFFFFF;
          text-align: right;
          font-size: 1.5em;
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

        .face icon {
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
          align-items: center;           
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
          font-size: 2em;  
          line-height: 1;       
          margin: auto;    
        }  


        .pollutant {
          float: center;
          border: 0;
          padding: .1em 1em;         
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
      const temp = hass.states[config.temp].state;
      const city = config.city;

      const ICON = {
        '1': 'mdi:emoticon-excited',
        '2': 'mdi:emoticon-happy',
        '3': 'mdi:emoticon-neutral',
        '4': 'mdi:emoticon-sad',
        '5': 'mdi:emoticon-poop',
        '6': 'mdi:emoticon-dead'
      };

      let card_content = ''
             
      if (air_pollution_level && air_quality_index && main_pollutant && city && temp) {
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
        
        const AQIbgColor = {
          '1': `#B0E867`,
          '2': '#FDD74B',
          '3': '#FE9B57',
          '4': '#FE6A69',
          '5': '#A97ABC',
          '6': '#A87383',
        }

        const AQIfontColor = {
          '1': `#718B3A`,
          '2': '#A57F23',
          '3': '#B25826',
          '4': '#AF2C3B',
          '5': '#634675',
          '6': '#683E51',
        }


        const AQIfaceColor = {
          '1': `#A8E05F`,
          '2': '#A57F23',
          '3': '#E3C143',
          '4': '#E48B4E',
          '5': '#986EA9',
          '6': '#986EA9',
        }

        card_content += `
          <div class="grid-container" style="background-color: ${AQIbgColor[getAQI()]};">
            <div class="city" style="background-color: #FFFFFF;">${city}</div>
            <div class="temp">${temp}º</div>
            <div class="face" style="background-color: ${AQIfaceColor[getAQI()]};">
              <ha-icon icon="${ICON[getAQI()]}"></ha-icon>
            
            </div>  
            <div class="aqi" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
              <div style="font-size:3em;">${air_quality_index}</div>
              US AQI
            </div>
            <div class="apl" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
              ${air_pollution_level}
              <div class="pollutant">
                ${main_pollutant}
              </div>
            </div>
          </div> 
        `
      };
      root.lastChild.hass = hass;
      root.getElementById('content').innerHTML = card_content;      
    }
    getCardSize() {
      return 1;
    }
}
  
customElements.define('air-visual-card', AirVisualCard);