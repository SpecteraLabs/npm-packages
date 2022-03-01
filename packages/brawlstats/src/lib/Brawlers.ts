import type { BrawlersInterface, BrawlerInterface, Brawlers } from './types';
import { fetch } from '@sapphire/fetch';
import Collection from '@discordjs/collection';
import { from } from './utils';

export class BrawlersMap extends Collection<string, BrawlerInterface> {
	#all = new Set<BrawlerInterface>();
	#token: string;
	public constructor(token: string = process.env.BRAWLSTARS_TOKEN as string) {
		super();
		this.#token = token;
	}

	public async init() {
		if (this.#all.size) return this;
		console.log(await this.#getBrawlers());
		for (const brawler of this.#all) {
			this.set(brawler.name, brawler);
		}
		return this;
	}

	public override get(key: string | Brawlers) {
		if (typeof key === 'string') key = key.toUpperCase();
		return super.get(key);
	}

	async #getBrawlers() {
		return from(async () => {
			const res = await fetch<BrawlersInterface>('https://api.brawlstars.com/v1/brawlers', {
				headers: {
					Authorization: `Bearer ${this.#token}`
				}
			});
			this.#all = new Set(res.items);
		});
	}
}
