import { ActionConfig, LovelaceCardConfig } from 'custom-card-helpers';

export interface AirVisualCardConfig extends LovelaceCardConfig {
  type: string;
  air_quality_index?: string;
  air_pollution_level?: string;
  main_pollutant?: string;
  main_pollutant_value?: string;
  weather?: string;
  country?: string;
  city?: string;
  unit_of_measurement?: string;
  speed_unit?: string;
  icons?: string;
  hide_title?: boolean;
  hide_face?: boolean;
  hide_weather?: boolean;
  hide_aqi?: boolean;
  hide_apl?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export type AQILevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface AQILevelInfo {
  level: AQILevel;
  label: string;
  bgColor: string;
  faceColor: string;
  fontColor: string;
}
