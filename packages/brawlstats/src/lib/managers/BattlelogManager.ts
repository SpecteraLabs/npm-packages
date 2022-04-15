import { parseTag } from '../helpers';
import { Structure } from '../structures/Structure';
import type { Battle, Event } from '../types';
import { from } from '../utils';

export class BattlelogManager {
	#token: string;
	public constructor(token: string) {
		this.#token = token;
	}

	/**
	 * Get battlelog of a player from the API.
	 * @param tag The tag of the player.
	 */
	public fetch(tag: string) {
		const structure = new Structure('players');
		tag = parseTag(tag);
		return from(async () => {
			const data = await structure.request<{ items: Battlelog[]; paging: unknown }>(`${tag}/battlelog`, this.#token);
			return data.items;
		});
	}

	/**
	 * Get battlelogs of multiple players from the API.
	 * @param tags The tag of each player.
	 */
	public async fetchMany(...tags: string[]) {
		const battlelogs: Battlelog[][] = [];
		for (const rawTag of tags) {
			const tag = parseTag(rawTag);
			const battlelog = await this.fetch(tag);
			battlelogs.push(battlelog);
		}
		return battlelogs;
	}
}

export interface Battlelog {
	battleTime: string;
	event: Event;
	battle: Battle;
}
