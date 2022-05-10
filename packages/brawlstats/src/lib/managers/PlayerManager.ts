import { Structure } from '../structures/Structure';
import { Player } from '../structures/Player';
import { parseTag } from '../helpers';
import { from, minutes } from '../utils';
import NodeCache from 'node-cache';
import { container } from '../../internal/container';

export class PlayerManager {
	#token: string;
	#cache = new NodeCache();
	public constructor(token: string) {
		this.#token = token;
	}

	/**
	 * Get details of a player from the API.
	 * @param {String} tag The tag of the player.
	 */
	public fetch(tag: string) {
		if (this.#cache.has(tag)) {
			return this.#cache.get<Player>(tag);
		}
		const structure = new Structure('players');
		tag = parseTag(tag);
		return from(async () => {
			const data = await structure.request<Player>(`${tag}`, this.#token);
			const player = new Player(data);
			this.#cache.set(player.tag, player, container.options?.cache?.player?.timeout ?? minutes(10));
			return player;
		});
	}

	/**
	 * Get details of multiple players from the API.
	 * @param {String} tags The tag of each player.
	 */
	public async fetchMany(...tags: string[]) {
		const players: Player[] = [];
		for (const rawTag of tags) {
			const tag = parseTag(rawTag);
			const player = await this.fetch(tag);
			players.push(player!);
		}
		return players;
	}
}
