export interface AQIBreakpoint {
  aqiLow: number;
  aqiHigh: number;
  bpLow: number;
  bpHigh: number;
}

export interface PollutantBreakpointConfig {
  unit: string;
  decimals: number;
  breakpoints: AQIBreakpoint[];
}

/**
 * EPA Breakpoint Table values based on EPA AQS Breakpoints:
 * https://aqs.epa.gov/aqsweb/documents/codetables/aqi_breakpoints.html
 * and EPA Technical Assistance Document for the Reporting of Daily Air Quality (AQI).
 */
export const EPA_BREAKPOINTS: Record<string, PollutantBreakpointConfig> = {
  pm25: {
    unit: 'µg/m³',
    decimals: 1,
    breakpoints: [
      { aqiLow: 0, aqiHigh: 50, bpLow: 0.0, bpHigh: 9.0 },
      { aqiLow: 51, aqiHigh: 100, bpLow: 9.1, bpHigh: 35.4 },
      { aqiLow: 101, aqiHigh: 150, bpLow: 35.5, bpHigh: 55.4 },
      { aqiLow: 151, aqiHigh: 200, bpLow: 55.5, bpHigh: 125.4 },
      { aqiLow: 201, aqiHigh: 300, bpLow: 125.5, bpHigh: 225.4 },
      { aqiLow: 301, aqiHigh: 500, bpLow: 225.5, bpHigh: 325.4 },
    ],
  },
  pm10: {
    unit: 'µg/m³',
    decimals: 0,
    breakpoints: [
      { aqiLow: 0, aqiHigh: 50, bpLow: 0, bpHigh: 54 },
      { aqiLow: 51, aqiHigh: 100, bpLow: 55, bpHigh: 154 },
      { aqiLow: 101, aqiHigh: 150, bpLow: 155, bpHigh: 254 },
      { aqiLow: 151, aqiHigh: 200, bpLow: 255, bpHigh: 354 },
      { aqiLow: 201, aqiHigh: 300, bpLow: 355, bpHigh: 424 },
      { aqiLow: 301, aqiHigh: 500, bpLow: 425, bpHigh: 604 },
    ],
  },
  co: {
    unit: 'ppm',
    decimals: 1,
    breakpoints: [
      { aqiLow: 0, aqiHigh: 50, bpLow: 0.0, bpHigh: 4.4 },
      { aqiLow: 51, aqiHigh: 100, bpLow: 4.5, bpHigh: 9.4 },
      { aqiLow: 101, aqiHigh: 150, bpLow: 9.5, bpHigh: 12.4 },
      { aqiLow: 151, aqiHigh: 200, bpLow: 12.5, bpHigh: 15.4 },
      { aqiLow: 201, aqiHigh: 300, bpLow: 15.5, bpHigh: 30.4 },
      { aqiLow: 301, aqiHigh: 500, bpLow: 30.5, bpHigh: 50.4 },
    ],
  },
  no2: {
    unit: 'ppb',
    decimals: 0,
    breakpoints: [
      { aqiLow: 0, aqiHigh: 50, bpLow: 0, bpHigh: 53 },
      { aqiLow: 51, aqiHigh: 100, bpLow: 54, bpHigh: 100 },
      { aqiLow: 101, aqiHigh: 150, bpLow: 101, bpHigh: 360 },
      { aqiLow: 151, aqiHigh: 200, bpLow: 361, bpHigh: 649 },
      { aqiLow: 201, aqiHigh: 300, bpLow: 650, bpHigh: 1249 },
      { aqiLow: 301, aqiHigh: 500, bpLow: 1250, bpHigh: 2049 },
    ],
  },
  so2: {
    unit: 'ppb',
    decimals: 0,
    breakpoints: [
      { aqiLow: 0, aqiHigh: 50, bpLow: 0, bpHigh: 35 },
      { aqiLow: 51, aqiHigh: 100, bpLow: 36, bpHigh: 75 },
      { aqiLow: 101, aqiHigh: 150, bpLow: 76, bpHigh: 185 },
      { aqiLow: 151, aqiHigh: 200, bpLow: 186, bpHigh: 304 },
      { aqiLow: 201, aqiHigh: 300, bpLow: 305, bpHigh: 604 },
      { aqiLow: 301, aqiHigh: 500, bpLow: 605, bpHigh: 1004 },
    ],
  },
  o3: {
    unit: 'ppm',
    decimals: 3,
    breakpoints: [
      { aqiLow: 0, aqiHigh: 50, bpLow: 0.000, bpHigh: 0.054 },
      { aqiLow: 51, aqiHigh: 100, bpLow: 0.055, bpHigh: 0.070 },
      { aqiLow: 101, aqiHigh: 150, bpLow: 0.071, bpHigh: 0.085 },
      { aqiLow: 151, aqiHigh: 200, bpLow: 0.086, bpHigh: 0.105 },
      { aqiLow: 201, aqiHigh: 300, bpLow: 0.106, bpHigh: 0.200 },
      { aqiLow: 301, aqiHigh: 500, bpLow: 0.405, bpHigh: 0.604 },
    ],
  },
};

/**
 * Normalizes any pollutant name, symbol, or entity state into a canonical key:
 * 'pm25' | 'pm10' | 'co' | 'no2' | 'so2' | 'o3' | null
 */
export function normalizePollutantKey(raw: string): string | null {
  if (!raw) return null;
  const s = raw
    .toLowerCase()
    .trim()
    .replace(/[\s\-_.]/g, '');

  if (s === 'pm25' || s === 'p2' || s === 'particulatematter25' || s === '0') return 'pm25';
  if (s === 'pm10' || s === 'p1' || s === 'particulatematter10' || s === '1') return 'pm10';
  if (s === 'o3' || s === 'ozone' || s === '2') return 'o3';
  if (s === 'no2' || s === 'n2' || s === 'nitrogendioxide' || s === '3') return 'no2';
  if (s === 'co' || s === 'carbonmonoxide' || s === '4') return 'co';
  if (s === 'so2' || s === 's2' || s === 'sulfurdioxide' || s === 'sulphurdioxide' || s === '5') return 'so2';

  // Fallback checks for substring inclusion
  if (s.includes('pm25') || s.includes('pm2.5') || s.includes('particulate25')) return 'pm25';
  if (s.includes('pm10') || s.includes('particulate10')) return 'pm10';
  if (s.includes('carbonmonoxide')) return 'co';
  if (s.includes('nitrogendioxide')) return 'no2';
  if (s.includes('sulfurdioxide') || s.includes('sulphurdioxide')) return 'so2';
  if (s.includes('ozone')) return 'o3';

  return null;
}

export interface ConcentrationResult {
  value: string;
  unit: string;
}

/**
 * Calculates pollutant concentration from AQI using EPA linear interpolation:
 * Cp = ((I - I_Lo) / (I_Hi - I_Lo)) * (BP_Hi - BP_Lo) + BP_Lo
 *
 * @param pollutant Pollutant identifier, symbol, or name (e.g. 'PM2.5', 'pm25', 'Ozone', 'co')
 * @param aqi Numeric AQI index value
 * @param preferredUnit Optional unit to preserve (e.g. 'ppb' vs 'ppm')
 */
export function calculatePollutantConcentration(
  pollutant: string,
  aqi: number,
  preferredUnit?: string,
): ConcentrationResult | null {
  const key = normalizePollutantKey(pollutant);
  if (!key || !EPA_BREAKPOINTS[key]) return null;
  if (isNaN(aqi) || aqi < 0) return null;

  const config = EPA_BREAKPOINTS[key];
  const { breakpoints } = config;

  // Find surrounding breakpoint bracket
  const bp =
    breakpoints.find((b) => aqi <= b.aqiHigh) ||
    breakpoints[breakpoints.length - 1];

  const { aqiLow, aqiHigh, bpLow, bpHigh } = bp;
  let cp = ((aqi - aqiLow) / (aqiHigh - aqiLow)) * (bpHigh - bpLow) + bpLow;

  let unit = config.unit;
  let decimals = config.decimals;

  // Handle unit conversions if a specific matching unit was preferred
  const cleanPref = preferredUnit?.toLowerCase().trim();
  if (cleanPref) {
    if (key === 'o3') {
      if (cleanPref === 'ppb') {
        cp = cp * 1000;
        unit = 'ppb';
        decimals = 0;
      } else if (cleanPref === 'ppm') {
        unit = 'ppm';
        decimals = 3;
      }
    } else if (key === 'co') {
      if (cleanPref === 'ppb') {
        cp = cp * 1000;
        unit = 'ppb';
        decimals = 0;
      }
    } else if (key === 'no2' || key === 'so2') {
      if (cleanPref === 'ppm') {
        cp = cp / 1000;
        unit = 'ppm';
        decimals = 3;
      }
    }
  }

  const value = decimals > 0 ? cp.toFixed(decimals) : Math.round(cp).toString();
  return { value, unit };
}

/**
 * Calculates AQI index value from a pollutant concentration using EPA linear interpolation:
 * I = ((I_Hi - I_Lo) / (BP_Hi - BP_Lo)) * (Cp - BP_Lo) + I_Lo
 *
 * @param pollutant Pollutant identifier, symbol, or name (e.g. 'PM2.5', 'pm25', 'Ozone', 'co')
 * @param concentration Numeric pollutant concentration
 * @param inputUnit Optional unit of the input concentration (e.g. 'ppb' vs 'ppm')
 */
export function calculateAQIFromConcentration(
  pollutant: string,
  concentration: number,
  inputUnit?: string,
): number | null {
  const key = normalizePollutantKey(pollutant);
  if (!key || !EPA_BREAKPOINTS[key]) return null;
  if (isNaN(concentration) || concentration < 0) return null;

  const config = EPA_BREAKPOINTS[key];
  let cp = concentration;

  // Handle unit conversions
  const cleanUnit = inputUnit?.toLowerCase().trim();
  if (cleanUnit) {
    if (key === 'o3') {
      if (cleanUnit === 'ppb') cp = cp / 1000;
    } else if (key === 'co') {
      if (cleanUnit === 'ppb') cp = cp / 1000;
    } else if (key === 'no2' || key === 'so2') {
      if (cleanUnit === 'ppm') cp = cp * 1000;
    }
  }

  // EPA truncation rules before finding breakpoints
  if (config.decimals === 0) {
    cp = Math.floor(cp);
  } else if (config.decimals === 1) {
    cp = Math.floor(cp * 10) / 10;
  } else if (config.decimals === 3) {
    cp = Math.floor(cp * 1000) / 1000;
  }

  const { breakpoints } = config;
  const bp =
    breakpoints.find((b) => cp <= b.bpHigh) ||
    breakpoints[breakpoints.length - 1];

  const { aqiLow, aqiHigh, bpLow, bpHigh } = bp;
  const aqi = ((aqiHigh - aqiLow) / (bpHigh - bpLow)) * (cp - bpLow) + aqiLow;

  return Math.round(aqi);
}

