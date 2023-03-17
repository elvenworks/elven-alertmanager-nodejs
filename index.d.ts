/**
 * ! Use this function if you want to export the logs without any kind of alert
 */
export function Alert(message: string): void;

/**
 * ! Use this function if you want to export the logs and warn of a possible error
 */
export function Warning(message: string): void;

/**
 * ! Start a new Gauge in prom-client
 */
export function InitElvenAlertManager(): void;
