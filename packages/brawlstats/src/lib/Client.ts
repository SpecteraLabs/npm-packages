import { BrawlersMap } from './Brawlers';
import { Club } from './Club';
import { Event } from './Events';
import { Logger, LoggerOptions } from './logger/Logger';
import { Player } from './Player';

export class Client {
	#token!: string;
	public options: ClientOptions;
	public logger: Logger;

	public constructor(options: ClientOptions) {
		this.options = options;
		this.#token = options.token ?? (process.env.BRAWLSTARS_TOKEN as string);
		this.logger = new Logger(this.options.logger!);
	}

	public async getPlayer(tag: string) {
		tag = tag.replace('#', '%23');
		return Player.getPlayer(tag, this.#token);
	}

	public async getBrawlers() {
		const res = new BrawlersMap(this.#token);
		return res.init();
	}

	public async getClub(tag: string) {
		tag = tag.replace('#', '%23');
		return Club.getClub(tag, this.#token);
	}

	public async getRotation() {
		return Event.getRotation(this.#token);
	}
}

interface ClientOptions {
	token?: string;
	logger?: LoggerOptions;
}
