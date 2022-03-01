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

export interface Battlelog {
	items?: ItemsEntity[] | null;
	paging: Paging;
}
export interface ItemsEntity {
	battleTime: string;
	event: Event;
	battle: Battle;
}
export interface Event {
	id: number;
	mode?: string | null;
	map?: string | null;
}
export interface Battle {
	mode: string;
	type: string;
	rank?: number | null;
	trophyChange?: number | null;
	players?: PlayersEntityOrEntityOrTeamsEntityEntityOrStarPlayer[] | null;
	result?: string | null;
	duration?: number | null;
	starPlayer?: PlayersEntityOrEntityOrTeamsEntityEntityOrStarPlayer1 | null;
	teams?: (PlayersEntityOrEntityOrTeamsEntityEntityOrStarPlayer[] | null)[] | null;
}
export interface PlayersEntityOrEntityOrTeamsEntityEntityOrStarPlayer {
	tag: string;
	name: string;
	brawler: Brawler;
}
export interface Brawler {
	id: number;
	name: string;
	power: number;
	trophies: number;
}
export interface PlayersEntityOrEntityOrTeamsEntityEntityOrStarPlayer1 {
	tag: string;
	name: string;
	brawler: Brawler;
}
export interface Paging {
	cursors: Cursors;
}
export interface Cursors {}

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
