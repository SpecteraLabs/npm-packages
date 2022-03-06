import type { BrawlersInterface, BrawlerInterface, Brawlers, PlayerBrawler } from './types';
import { fetch } from '@sapphire/fetch';
import Collection from '@discordjs/collection';
import { from } from './utils';

export class BrawlersMap<K = BrawlerInterface> extends Collection<string, K | BrawlerInterface> {
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

	public override get(key: Brawlers | keyof typeof Brawlers): K {
		return super.get(key) as unknown as K;
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

	public static construct(data: PlayerBrawler[]) {
		const brawlers = new BrawlersMap<PlayerBrawler>();
		for (const brawler of data) {
			brawlers.set(brawler.name, brawler);
		}
		return brawlers;
	}
}
