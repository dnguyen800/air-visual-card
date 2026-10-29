import { AQILevel, AQILevelInfo } from './types';

export const CARD_VERSION = '3.0.5';

export const AQI_LEVEL_DATA: Record<AQILevel, AQILevelInfo> = {
  1: {
    level: 1,
    label: 'Good',
    bgColor: '#B0E867',
    faceColor: '#A8E05F',
    fontColor: '#718B3A',
  },
  2: {
    level: 2,
    label: 'Moderate',
    bgColor: '#E3C143',
    faceColor: '#FDD64B',
    fontColor: '#A57F23',
  },
  3: {
    level: 3,
    label: 'Unhealthy for Sensitive Groups',
    bgColor: '#E48B4E',
    faceColor: '#FF9B57',
    fontColor: '#B25826',
  },
  4: {
    level: 4,
    label: 'Unhealthy',
    bgColor: '#E45F5E',
    faceColor: '#FE6A69',
    fontColor: '#AF2C3C',
  },
  5: {
    level: 5,
    label: 'Very Unhealthy',
    bgColor: '#986EA9',
    faceColor: '#A97ABC',
    fontColor: '#634675',
  },
  6: {
    level: 6,
    label: 'Hazardous',
    bgColor: '#A5516B',
    faceColor: '#A87383',
    fontColor: '#683E51',
  },
};

export const WEATHER_ICON_MAP: Record<string, string> = {
  'clear-night': 'night-clear-sky',
  cloudy: 'scattered-clouds',
  fog: 'scattered-clouds',
  hail: 'rain',
  lightning: 'rain',
  'lightning-rainy': 'rain',
  partlycloudy: 'new-clouds',
  pouring: 'rain',
  rainy: 'rain',
  snowy: 'snow',
  'snowy-rainy': 'snow',
  sunny: 'clear-sky',
  windy: 'scattered-clouds',
  'windy-variant': 'scattered-clouds',
  exceptional: 'snow',
};

export const POLLUTANT_NAMES: Record<string, string> = {
  p2: 'PM2.5',
  pm25: 'PM2.5',
  pm10: 'PM10',
  p1: 'PM10',
  o3: 'Ozone',
  no2: 'Nitrogen Dioxide',
  n2: 'Nitrogen Dioxide',
  so2: 'Sulfur Dioxide',
  s2: 'Sulfur Dioxide',
  co: 'Carbon Monoxide',
  neph: 'Nephelometry',
};

export const POLLUTANT_UNITS: Record<string, string> = {
  pm25: 'µg/m³',
  pm10: 'µg/m³',
  p2: 'µg/m³',
  p1: 'µg/m³',
  o3: 'ppb',
  no2: 'ppb',
  n2: 'ppb',
  so2: 'ppb',
  s2: 'ppb',
  co: 'ppm',
  neph: '1/Mm',
};

export const STATE_TO_AQI_LEVEL: Record<string, AQILevel> = {
  good: 1,
  moderate: 2,
  unhealthy_for_sensitive_groups: 3,
  'unhealthy-for-sensitive-groups': 3,
  unhealthy_sensitive: 3,
  'unhealthy-sensitive': 3,
  unhealthy: 4,
  very_unhealthy: 5,
  'very-unhealthy': 5,
  hazardous: 6,
};

export const getAQILevel = (value: number): AQILevel => {
  if (value <= 50) return 1;
  if (value <= 100) return 2;
  if (value <= 150) return 3;
  if (value <= 200) return 4;
  if (value <= 300) return 5;
  return 6;
};
