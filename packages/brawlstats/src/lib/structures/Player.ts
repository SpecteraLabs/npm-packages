import { Structure } from './Structure';
import type { Battlelog, StarPowersEntityOrGadgetsEntity } from '../types';
import { from } from '../utils';
import { rumbleLevels } from '../../internal/functions';
import deprecate from 'depd';

/**
 * The entity which we use to construct every player entry.
 */
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
	public roboRumbleLevel!: string;
	public bestTimeAsBigBrawler!: number;
	public club!: PlayerClub;
	public brawlers?: BrawlersEntity[] | null;
	public bestRoboRumbleTime!: number;

	public constructor(options: Omit<IPlayer, '3vs3Victories'>) {
		super('players');
		Object.assign(this, options);
		this.roboRumbleLevel = rumbleLevels(options.bestRoboRumbleTime)!;
		deprecate('brawlstats').property(this, 'bestRoboRumbleTime', 'Use Player#roboRumbleLevel instead');
	}

	/**
	 * Get battlelog of the player.
	 */
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
	club: PlayerClub;
	brawlers?: BrawlersEntity[] | null;
}
interface Icon {
	id: number;
}
export interface PlayerClub {
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
