# Air Visual Card

![example](images/example.PNG)

This is a Home Assistant Lovelace card that uses the [AirVisual Sensor](https://www.home-assistant.io/components/sensor.airvisual/) to provide air quality index (AQI) data and creates a card like the ones found on [AirVisual website](https://www.airvisual.com). Requires the [AirVisual Sensor](https://www.home-assistant.io/components/sensor.airvisual/) to be setup. Tested with Yahoo and Darksky Weather component.

## Features
  - Card colors and icons change depending on AQI level


## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| air_pollution_level | string | Optional | Name of the Air Pollution Level sensor created by Airvisual component. If sensor does not exist, do not add this config value.
| air_quality_index | string | Optional | Name of the Air Quality Index sensor created by Airvisual component. If sensor does not exist, do not add this config value.
| main_pollutant | string | Optional | Name of the Main Pollutant sensor created by Airvisual component. If sensor does not exist, do not add this config value.
| temp | string | Optional| Name of the temperature sensor or weather entity, such as 'weather.yweather' or 'sensor.yweather_temperature'
| country | string | Optional | Name of the country that Airvisual is collecting AQI data from.
| city | string | Optional | Name of the city that AirVisual is collecting AQI data from.
| icons | string | Optional | The local directory where the .svg files are located. For example, 'icons: "/hacsfiles/air-visual-card"' is appropriate if this plugin is installed using HACS. If left blank, icons will be loaded from Jsdeliver CDN. 
| hide_title | boolean | Optional | Set to `true` if you want to hide the title that includes the city name and weather. Useful for minimalists or those using dark themes.
| hide_face | boolean | Optional | Set to `true` if you want to hide the face icon.
| weather | string | Optional | If temp field does not use a weather entity (such as 'sensor.yweather_temperature'), this attribute allows you to specify a weather state for displaying the appropiate icon on the card.

## HACS Installation
1. Open the HACS on your Home Assistant instance.
2. Open the Plugins section and click on the Air Visual Card.
3. Click on Install, then click on "Add to Lovelace"

## Manual Installation
1. Download the [AirVisual Card](https://raw.githubusercontent.com/dnguyen800/air-visual-card/master/dist/air-visual-card.js)
2. Place the file in your `config/www` folder
3. Include the card code in the Resources section of your `ui-lovelace-card.yaml` like below:

```yaml
resources:
  - url: /local/air-visual-card.js
    type: js
```
4. **Optional:** If you wish to store the Airvisual icons locally, then download the icons [here](https://github.com/dnguyen800/air-visual-card/tree/master/dist).

5. Save the icons in a directory in Home Assistant, such as ''/local/icons/aqi_icons"

6. Update the card configuration in `ui-lovelace.yaml`  to include the following (use directory name in step #7):

   ```yaml
    icons: "/local/icons/aqi_icons"
   ```

## Instructions
1. Install the [AirVisual sensor](https://www.home-assistant.io/components/sensor.airvisual/) and confirm AQI, APL, and Main Pollutant sensors are created, like below.

![sensors](images/airvisual_sensors.JPG)

2. Write configuration for the card and list your AirVisual sensors. MAKE SUREAn examples is provided below:

Direct editing within the YAML files (`ui-lovelace.yaml`)
```yaml
  - type: 'custom:air-visual-card'
    air_pollution_level: sensor.use_the_actual_name_of_your_sensor_not_this_example
    air_quality_index: sensor.use_the_actual_name_of_your_sensor_not_this_example
    main_pollutant: sensor.use_the_actual_name_of_your_sensor_not_this_example
    temp: weather.use_the_actual_name_of_your_weather_entity_not_this_example
    city: 'San Francisco'
```

Adding via the Lovelace UI Card Configuration
```
type: 'custom:air-visual-card'
air_pollution_level: sensor.use_the_actual_name_of_your_sensor_not_this_example
air_quality_index: sensor.use_the_actual_name_of_your_sensor_not_this_example
city: Moscow
main_pollutant: sensor.use_the_actual_name_of_your_sensor_not_this_example
temp: weather.use_the_actual_name_of_your_weather_entity_not_this_example
```

3. Refresh Lovelace to load the card.


## FAQ
 - The card doesn't show the temperature properly.
  
   Let me know which weather provider you are using and I'll try to fix the issue. I have only tested with the Yahoo! Weather component. Optionally, if you create a template sensor that reports the temperature as its state, you can use that sensor as for the temp config.

 - This card doesn't work in Fully Kiosk Browser on Amazon Fire tablets. Why?

   This card uses a new CSS function, CSS Grid Layout, which was implemented in October 2018, and isn't compatible with browsers using old versions of Android WebView. That's my guess anyways.

 - The card is showing the word 'unavailable' instead of the AQI data!
   
   Most likely your Airvisual key expired (it has a one-year expiration) and needs to be recreated. Delete and recreate a new key on airvisual.com and save the key in your HA config file.

## Support
I am studying programming as a hobby and this is my first set of Home Assistant projects. Unfortunately, I know nothing about Javascript and relied on studying other Lovelace custom cards to write this. Suggestions are welcome but no promises if I can fix anything! If you're familiar with CSS, then you can edit the CSS style in the .js file directly.

## Credits
  - All the custom HA cards and components I studied from, including [@Arsaboo's Animated Weather card](https://github.com/arsaboo/homeassistant-config/blob/master/www/custom_ui/weather-card.js) and [Mini Media Player](https://github.com/kalkih/mini-media-player)
  - [airvisual.com](https://www.airvisual.com/) - For the card design and data
  - [Home Assistant Air Visual sensor](https://www.home-assistant.io/components/sensor.airvisual/)

