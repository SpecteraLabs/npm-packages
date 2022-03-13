import type { Events } from './enums';

export interface BrawlerInterface {
	id: number;
	name: string;
	starPowers?: StarPowersEntityOrGadgetsEntity[] | null;
	gadgets?: StarPowersEntityOrGadgetsEntity[] | null;
}

export interface IClub {
	tag: string;
	name: string;
	description: string;
	type: string;
	badgeId: number;
	requiredTrophies: number;
	trophies: number;
	members?: MembersEntity[] | null;
}
export interface MembersEntity {
	tag: string;
	name: string;
	nameColor: string;
	role: string;
	trophies: number;
	icon: Icon;
}
export interface Icon {
	id: number;
}

export interface PlayerBrawler {
	id: number;
	name: string;
	power: number;
	rank: number;
	trophies: number;
	highestTrophies: number;
	gears?: Gears[];
	starPowers?: StarPowersEntityOrGadgetsEntity[];
	gadgets?: StarPowersEntityOrGadgetsEntity[];
}

export interface Gears {
	id: number;
	name: 'SHIELD' | 'SPEED' | 'HEALTH' | 'DAMAGE' | 'RESISTANCE';
	level: 1 | 2 | 3;
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

export interface IEvent {
	startTime: string;
	endTime: string;
	event: Event;
}
export interface Event {
	id: number;
	mode?: keyof typeof Events | string;
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
