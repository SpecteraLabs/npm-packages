import { Structure } from '../structures/Structure';
import { Club } from '../structures/Club';
import { parseTag } from '../helpers';
import { from, minutes } from '../utils';
import { container } from '../../internal/container';
import { Cache } from '../../internal/Cache';

export class ClubManager {
	#token: string;
	private readonly cache = new Cache<Club>();
	public constructor(token: string) {
		this.#token = token;
	}

	/**
	 * Get details of a club from the API.
	 * @async
	 * @param {String} tag The tag of the club.
	 */
	public fetch(tag: string) {
		if (this.cache.has(tag)) {
			return this.cache.get(tag);
		}
		const structure = new Structure('clubs');
		tag = parseTag(tag);
		return from(async () => {
			const data = await structure.request<Club>(`${tag}`, this.#token);
			const club = new Club(data);
			this.cache.set(club.tag, club, container.options?.cache?.club?.timeout ?? minutes(10));
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
