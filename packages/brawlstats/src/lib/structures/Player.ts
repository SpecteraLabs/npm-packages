import { Structure } from './Structure';
import type { Battlelog, StarPowersEntityOrGadgetsEntity } from '../types';
import { from } from '../utils';

export class Player extends Structure {
	public tag!: string;
	public name!: string;
	public nameColor!: string;
	public icon!: Icon;
	public trophies!: number;
	public highestTrophies!: number;
	public highestPowerPlayPoints!: number;
	public expLevel!: number;
	public expPoints!: number;
	public isQualifiedFromChampionshipChallenge!: boolean;
	public trioVictories!: number;
	public soloVictories!: number;
	public duoVictories!: number;
	public bestRoboRumbleTime!: number;
	public bestTimeAsBigBrawler!: number;
	public club!: Club;
	public brawlers?: BrawlersEntity[] | null;
	public constructor(options: Omit<IPlayer, '3vs3Victories'>) {
		super('players');
		Object.assign(this, options);
	}

	public getBattleLog() {
		return from(async () => {
			const tag = this.tag.replace('#', '%23');
			const res = await super.request<Battlelog>(`${tag}/battlelog`);
			return res.items;
		});
	}
}

export interface IPlayer {
	tag: string;
	name: string;
	nameColor: string;
	icon: Icon;
	trophies: number;
	highestTrophies: number;
	highestPowerPlayPoints: number;
	expLevel: number;
	expPoints: number;
	isQualifiedFromChampionshipChallenge: boolean;
	'3vs3Victories': number;
	trioVictories: number;
	soloVictories: number;
	duoVictories: number;
	bestRoboRumbleTime: number;
	bestTimeAsBigBrawler: number;
	club: Club;
	brawlers?: BrawlersEntity[] | null;
}
interface Icon {
	id: number;
}
interface Club {
	tag: string;
	name: string;
}
interface BrawlersEntity {
	id: number;
	name: string;
	power: number;
	rank: number;
	trophies: number;
	highestTrophies: number;
	gears?: (GearsEntity | null)[] | null;
	starPowers?: (StarPowersEntityOrGadgetsEntity | null)[] | null;
	gadgets?: StarPowersEntityOrGadgetsEntity[] | null;
}
export interface GearsEntity {
	id: number;
	name: string;
	level: number;
}
