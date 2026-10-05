<!-- ko-fi-support -->
<p align="center">
  <a href="https://ko-fi.com/chreece">
    <img src="https://raw.githubusercontent.com/Chreece/pir2ha/main/.github/ko-fi-banner.svg" alt="Support Chreece on Ko-fi" width="600">
  </a>
</p>

# Air Visual Card

![example](images/example.PNG)

A Home Assistant Lovelace card that displays Air Quality Index (AQI) data in a style similar to [AirVisual](https://www.airvisual.com).

Originally designed for the AirVisual integration, this card now supports multiple air quality data sources and handles real-world Home Assistant setups more robustly.

---

## Supported Integrations

- [AirVisual](https://www.home-assistant.io/integrations/airvisual/)
- [World Air Quality Index (WAQI)](https://www.home-assistant.io/integrations/waqi/)
- [World's Air Quality Index (worlds_air_quality_index)](https://github.com/pawkakol1/worlds-air-quality-index) (custom integration)

---

## Features

- Dynamic colors and icons based on AQI level
- Automatic main pollutant detection across integrations
- Weather display (temperature, wind, optional humidity)
- Graceful handling of missing or partial data
- Works without requiring template sensors

---

## Options

### Main Options

| Name                  | Type    | Default                      | Description |
|----------------------|--------|-----------------------------|------------|
| `type`               | string | **Required**                | `custom:air-visual-card` |
| `air_pollution_level`| string | optional                    | Air Pollution Level sensor |
| `air_quality_index`  | string | optional                    | AQI sensor |
| `main_pollutant`     | string | optional                    | Main pollutant sensor |
| `weather`            | string | optional                    | Weather entity |
| `country`            | string | optional                    | Display location |
| `city`               | string | optional                    | City name |
| `unit_of_measurement`| string | `AQI`                       | AQI unit label |
| `icons`              | string | `/hacsfiles/air-visual-card`| Icon path |
| `hide_title`         | boolean| `true`                      | Hide title |
| `hide_face`          | boolean| `false`                     | Hide face icon |
| `hide_weather`       | boolean| `true`                      | Hide weather |

---

## Main Pollutant Handling

The card automatically adapts depending on your integration:

### AirVisual
- Uses:
  - `pollutant_symbol`
  - `pollutant_unit`

### WAQI
- Uses sensor state (`o3`, `pm25`, etc.)

### worlds_air_quality_index
- Uses AQI attribute:
  - `dominentpol`

No manual mapping or template sensors required.

---

## Weather Behavior

- Normalizes weather states (e.g. `partlycloudy`)
- Prevents broken icons
- Handles missing attributes safely

### Notes

- Some weather integrations do **not provide humidity**
  - Humidity will be hidden automatically
- Temperature and wind will still be displayed

---

## Icons

Icons are required for proper display.

### HACS Installation
Icons are automatically available at:
`/hacsfiles/air-visual-card`


### Manual Installation

1. Download icons:
   https://github.com/dnguyen800/air-visual-card/tree/master/dist

2. Place in:
`/config/www/air-visual-card/`


3. Configure:

```yaml
icons: "/local/air-visual-card"
```

## Installation

### HACS

1. Open HACS
2. Go to **Frontend**
3. Search for **Air Visual Card**
4. Install
5. Add to Lovelace

### Manual

1. Download:

   `https://raw.githubusercontent.com/dnguyen800/air-visual-card/master/dist/air-visual-card.js`

2. Place it in:

   `/config/www/`

3. Add it to your Lovelace resources:

   ```yaml
   resources:
     - url: /local/air-visual-card.js
       type: module
   ```

---

## Example

```yaml
type: custom:air-visual-card
air_quality_index: sensor.rodenkirchen_air_quality_index
main_pollutant: sensor.rodenkirchen_ozone_o3
weather: weather.zuhause
country: Germany
hide_title: true
```

### What happens automatically

- Detects dominant pollutant from AQI (`dominentpol`)
- Maps pollutant codes (`o3`, `pm25`, etc.)
- Uses correct units
- Handles missing humidity
- Prevents broken icons

---

## FAQ

### Temperature not showing correctly

Different weather integrations expose different attributes.

Check your entity in **Developer Tools → States**.

### Card shows `unavailable`

Your integration likely failed or your API key expired.

### Icons not showing

Check that:

- the `icons` path is correct
- the files exist in `/www`
- your browser cache has been cleared

### Works without AirVisual?

Yes. WAQI and `worlds_air_quality_index` are supported.

---

## Support

This project is based on learning and experimentation.  
Improvements and contributions are welcome.

---

## Credits

- [AirVisual](https://www.airvisual.com/) for design inspiration
- Home Assistant community
- Various Lovelace custom cards
- [Weather Card](https://github.com/bramkragten/weather-card) by @bramkragten
