import { Structure } from '../structures/Structure';
import { Club } from '../structures/Club';
import { parseTag } from '../helpers';
import { from } from '../utils';
import Collection from '@discordjs/collection';

export class ClubManager {
	#token: string;
	#cache: Collection<string, Club> = new Collection();
	public constructor(token: string) {
		this.#token = token;
	}

	/**
	 * Get details of a club from the API.
	 * @async
	 * @param {String} tag The tag of the club.
	 */
	public fetch(tag: string) {
		if (this.#cache.has(tag)) {
			return this.#cache.get(tag);
		}
		const structure = new Structure('clubs');
		tag = parseTag(tag);
		return from(async () => {
			const data = await structure.request<Club>(`${tag}`, this.#token);
			const club = new Club(data);
			this.#cache.set(club.tag, club);
			return club;
		});
	}

	/**
	 * Get details of a multiple clubs from the API.
	 * @async
	 * @param {String} tags The tag of each club.
	 */
	public async fetchMany(...tags: string[]) {
		const clubs: Club[] = [];
		for (const rawTag of tags) {
			const tag = parseTag(rawTag);
			const club = await this.fetch(tag);
			clubs.push(club!);
		}
		return clubs;
	}
}
