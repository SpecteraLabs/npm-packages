import { fetch } from '@sapphire/fetch';
import { Base } from './Base';
import type { Battlelog, StarPowersEntityOrGadgetsEntity } from './types';
import { from } from './utils';

export class Player extends Base {
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

	public async getBattleLog() {
		return from(async () => {
			const tag = this.tag.replace('#', '%23');
			const res = await super.request<Battlelog>(`${tag}/battlelog`);
			return res.items;
		});
	}

	public static async getPlayer(tag: string, token: string) {
		return from(async () => {
			const res = await fetch<Omit<IPlayer, 'trioVictories'>>(`https://api.brawlstars.com/v1/players/${tag}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const { '3vs3Victories': wins, ...data } = res;
			Reflect.set(data, 'trioVictories', wins);
			return new Player(data as Omit<IPlayer, '3vs3Victories'>);
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
export interface Icon {
	id: number;
}
export interface Club {
	tag: string;
	name: string;
}
export interface BrawlersEntity {
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
