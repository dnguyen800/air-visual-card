import { css, CSSResultGroup } from 'lit';

export const cardStyles: CSSResultGroup = css`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    padding: 0;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  .header {
    padding: 12px 16px 8px;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--primary-text-color);
    text-align: center;
    letter-spacing: 0.2px;
  }

  .main-grid {
    display: grid;
    grid-template-columns: 90px 1fr 1.2fr;
    align-items: stretch;
    transition: background-color 0.4s ease;
  }

  .main-grid.no-face {
    grid-template-columns: 1fr 1.2fr;
  }

  .main-grid.only-aqi {
    grid-template-columns: 90px 1fr;
  }

  .face-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.2s;
  }

  .face-section:active {
    transform: scale(0.95);
  }

  .face-section svg {
    display: block;
    width: 58px;
    height: 58px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.12));
  }

  .aqi-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    cursor: pointer;
    text-align: center;
  }

  .aqi-value {
    font-size: 2.8rem;
    line-height: 1;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    letter-spacing: -1px;
  }

  .aqi-unit {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
    opacity: 0.9;
  }

  .apl-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    gap: 6px;
    cursor: pointer;
  }

  .apl-badge {
    font-size: 0.95rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    padding: 2px 4px;
  }

  .pollutant-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
    color: #333333;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.78rem;
    font-weight: 600;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    max-width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .weather-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: var(--card-background-color, rgba(255, 255, 255, 0.05));
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--secondary-text-color);
  }

  .weather-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 6px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }

  .weather-item:not(:last-child) {
    border-right: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  .weather-item:hover {
    background-color: rgba(125, 125, 125, 0.08);
  }

  .weather-item svg {
    flex-shrink: 0;
    display: inline-block;
  }

  .weather-item span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .warning {
    padding: 16px;
    color: var(--error-color, #db4437);
    font-weight: 500;
    text-align: center;
    font-size: 0.9rem;
  }
`;
