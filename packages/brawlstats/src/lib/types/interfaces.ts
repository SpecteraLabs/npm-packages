export interface BrawlerInterface {
	id: number;
	name: string;
	starPowers?: StarPowersEntityOrGadgetsEntity[] | null;
	gadgets?: StarPowersEntityOrGadgetsEntity[] | null;
}
export interface StarPowersEntityOrGadgetsEntity {
	id: number;
	name: string;
}
export interface BrawlersInterface {
	items: BrawlerInterface[];
}

export const enum LogLevel {
	Trace = 10,

	Debug = 20,

	Info = 30,

	Warn = 40,

	Error = 50,

	Fatal = 60,

	None = 100
}

export interface ILogger {
	has(level: LogLevel): boolean;

	trace(...values: readonly unknown[]): void;

	debug(...values: readonly unknown[]): void;

	info(...values: readonly unknown[]): void;

	warn(...values: readonly unknown[]): void;

	error(...values: readonly unknown[]): void;

	fatal(...values: readonly unknown[]): void;

	write(level: LogLevel, ...values: readonly unknown[]): void;
}
