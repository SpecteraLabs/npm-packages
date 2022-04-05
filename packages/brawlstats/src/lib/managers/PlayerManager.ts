import { Structure } from '../structures/Structure';
import { Player } from '../structures/Player';
import { parseTag } from '../helpers';
import { from } from 'lib/utils';

export class PlayerManager {
	#cache: Player[] = [];
	public fetch(tag: string) {
		if (this.#cache.some((player) => player.tag === tag)) {
			return this.#cache.find((player) => player.tag === tag);
		}
		const structure = new Structure('players');
		tag = parseTag(tag);
		return from(async () => {
			const data = await structure.request<Player>(`${tag}`);
			return new Player(data);
		});
	}

	public async fetchMany(...tags: string[]) {
		const players: Player[] = [];
		for (const rawTag of tags) {
			const tag = parseTag(rawTag);
			const player = await this.fetch(tag);
			players.push(player!);
		}
	}
}
