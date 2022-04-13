import { Structure } from '../structures/Structure';
import { Club } from '../structures/Club';
import { parseTag } from '../helpers';
import { from } from '../utils';

export class ClubManager {
	#token: string;
	#cache: Club[] = [];
	public constructor(token: string) {
		this.#token = token;
	}

	public fetch(tag: string) {
		if (this.#cache.some((club) => club.tag === tag)) {
			return this.#cache.find((club) => club.tag === tag);
		}
		const structure = new Structure('clubs');
		tag = parseTag(tag);
		return from(async () => {
			const data = await structure.request<Club>(`${tag}`, this.#token);
			const club = new Club(data);
			this.#cache.push(club);
			return club;
		});
	}

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
