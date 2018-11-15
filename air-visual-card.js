class AirVisualCard extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    setConfig(config) {
      if (!config.air_pollution_level) {
        throw new Error("Please include the 'air pollution level' sensor.");
      }
      if (!config.air_quality_index) {
        throw new Error("Please include the 'air quality index' sensor.");
      }
      if (!config.main_pollutant) {
        throw new Error("Please include the 'main pollutant' sensor.");
      }
      if (!config.city) {
        throw new Error("Please list the city.");
      }

      if (!config.temp) {
        throw new Error("Please include a weather temperature sensor.");
      }
      
      const root = this.shadowRoot;
      if (root.lastChild) root.removeChild(root.lastChild);
  
      const cardConfig = Object.assign({}, config);
      if (!cardConfig.title) {
        cardConfig.title = `Quote of the Day`;
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
          grid-template-columns: auto auto 300px;
          grid-gap: 0;
          background-color: #FFA968;
          border: 1px solid white;
        }

        .grid-container > div { 
        }

        .city {
          grid-column-start: 1;
          grid-column-end: 3;
          text-align: left;
          background-color: #FFFFFF;
          color: #414141;
          font-size: 38px;
          padding: 15px 35px;  
        }

        .temp {
          grid-row-start: 1;
          grid-row-end: 2;
          grid-column-start: 3;
          grid-column-end: 4;
          background-color: #FFFFFF;
          text-align: right;
          font-size: 30px;
          color: #414141;
          padding: 15px 35px;
        }
  
        .face {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 1;
          grid-column-end: 2;
          padding: 20px;
          color: #B25826;
          background-color: #FE9B57;
       }
  
       .aqi {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 2;
          grid-column-end: 3;
          padding: 30px;
          line-height: 1.1;
          text-align: center;
          color: #B25826; 
          margin: auto;
        }

        .apl {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 3;
          grid-column-end: 4;
          text-align: center;
          line-height: 1;
          padding: 25px 1px;
          font-size: 2vw;
          color: #B25826;
          margin: auto;
        }  

        button {
          float: center;
          border: 0;
          padding: 10px 10px;
          color: rgb(120, 120, 120);
          background-color: white;
          border-radius: 4px;
          color: #B25826;
          font-weight: bold;
          padding: 5px;          
        }

        img {
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

      let card_content = ''
      
      card_content += ``;
       
      if (air_pollution_level && air_quality_index && main_pollutant && city && temp) {

        card_content += `
          <div class="grid-container">
            <div class="city">${city}</div>
            <div class="temp">${temp}º</div>
            <div class="face"><img src="/local/icons/aqi_icons/ic-face-3-orange.svg"></img></div>  
            <div class="aqi">
              <div style="font-size:4vw;">126</div>
              US AQI
            </div>
            <div class="apl">
              ${air_pollution_level}<br>
              <button>${main_pollutant} | 00.0 µg/m³</button>
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