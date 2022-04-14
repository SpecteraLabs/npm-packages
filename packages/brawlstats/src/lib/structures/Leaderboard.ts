import type { Icon } from '../types';
import type { PlayerClub } from './Player';
import { Structure } from './Structure';

/**
 * The entity which we use to construct every leaderboard entry.
 */
export class Leaderboard extends Structure {
	public tag!: string;
	public name!: string;
	public nameColor!: string;
	public icon!: Icon;
	public trophies!: number;
	public rank!: number;
	public club!: PlayerClub;

	public constructor(options: Omit<Leaderboard, 'constructor'>) {
		super('players');
		Object.assign(this, options);
	}
}
