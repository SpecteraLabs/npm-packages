import { BrawlersMap } from './Brawlers';
import { Logger, LoggerOptions } from './logger/Logger';

export class Client {
	#token!: string;
	public brawlers!: BrawlersMap;
	public options: ClientOptions;
	public logger: Logger;

	public constructor(options: ClientOptions) {
		this.options = options;
		this.logger = new Logger(this.options.logger!);
	}

	public async login(token: string = process.env.BRAWLSTARS_TOKEN as string) {
		this.#token = token;
		const res = new BrawlersMap(this.#token);
		this.brawlers = await res.init();
	}
}

interface ClientOptions {
	logger?: LoggerOptions;
}
