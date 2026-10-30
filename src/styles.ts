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

  /* Classic Layout Header */
  .header {
    padding: 12px 16px 8px;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--primary-text-color);
    text-align: center;
    letter-spacing: 0.2px;
  }

  /* Classic Main Grid */
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

  /* Classic Weather Bar */
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

  /* ========================================================
     Modern Layout Styles
     ======================================================== */
  .card-container.modern-layout {
    padding: 16px;
    box-sizing: border-box;
  }

  .card-container.modern-layout.no-title {
    padding: 12px;
  }

  .modern-header {
    font-size: 1.35rem;
    font-weight: 700;
    text-align: center;
    color: var(--primary-text-color, #111111);
    letter-spacing: -0.2px;
    margin: 0 0 14px 0;
    line-height: 1.25;
  }

  .modern-box {
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 10px 28px -4px var(--aqi-glow, rgba(0, 0, 0, 0.12));
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .modern-colored-section {
    padding: 18px 20px 16px;
    transition: background-color 0.4s ease;
    box-sizing: border-box;
  }

  .modern-top-grid {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
  }

  .modern-top-grid.no-face {
    grid-template-columns: auto 1fr;
  }

  .modern-top-grid.no-aqi {
    grid-template-columns: 1fr auto;
  }

  .modern-top-grid.only-status {
    grid-template-columns: 1fr;
  }

  .modern-aqi-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    color: inherit;
    border-radius: 12px;
    padding: 8px 14px;
    min-width: 64px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, background-color 0.2s ease;
  }

  .modern-box[data-font="light"] .modern-aqi-badge {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .modern-aqi-badge:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  .modern-box[data-font="light"] .modern-aqi-badge:hover {
    background-color: rgba(255, 255, 255, 0.28);
  }

  .modern-aqi-badge:active {
    transform: scale(0.96);
  }

  .modern-aqi-val {
    font-size: 1.85rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.5px;
    font-variant-numeric: tabular-nums;
  }

  .modern-aqi-lbl {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 4px;
    opacity: 0.9;
    white-space: nowrap;
  }

  .modern-status-section {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    min-width: 0;
  }

  .modern-status-text {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.2px;
    word-break: break-word;
  }

  .modern-face-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease;
  }

  .modern-face-section:active {
    transform: scale(0.95);
  }

  .modern-face-section svg {
    display: block;
    width: 52px;
    height: 52px;
    color: inherit;
  }

  .modern-divider {
    height: 1px;
    background-color: currentColor;
    opacity: 0.12;
    margin: 16px 0 14px;
  }

  .modern-pollutant-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-size: 1.15rem;
    line-height: 1.25;
    cursor: pointer;
  }

  .modern-pollutant-name {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .modern-pollutant-bold {
    font-weight: 700;
  }

  .modern-pollutant-val {
    font-weight: 600;
    white-space: nowrap;
    text-align: right;
    flex-shrink: 0;
  }

  .modern-weather-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    background-color: var(--ha-card-background, var(--card-background-color, #ffffff));
    color: var(--primary-text-color, #212121);
    padding: 14px 16px;
    font-size: 1.1rem;
    font-weight: 500;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .modern-weather-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 6px;
    transition: transform 0.15s ease;
  }

  .modern-weather-item:hover {
    transform: translateY(-1px);
  }

  .modern-weather-item svg {
    flex-shrink: 0;
    display: inline-block;
  }

  .modern-weather-item.humidity-item svg {
    color: #29b6f6;
  }

  .modern-weather-item span {
    white-space: nowrap;
  }

  .warning {
    padding: 16px;
    color: var(--error-color, #db4437);
    font-weight: 500;
    text-align: center;
    font-size: 0.9rem;
  }
`;
