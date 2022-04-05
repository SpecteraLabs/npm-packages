import { makeBrawlersMap } from './makeBrawlersMap';
import { ClubManager } from './managers/ClubManager';
import { PlayerManager } from './managers/PlayerManager';

export class Client {
	#token!: string;
	public options: ClientOptions;
	public brawlers = makeBrawlersMap();
	public players: PlayerManager;
	public clubs: ClubManager;

	public constructor(options?: ClientOptions) {
		this.options = options!;
		this.#token = options?.token ?? (process.env.BRAWLSTARS_TOKEN as string);
		this.players = new PlayerManager(this.#token);
		this.clubs = new ClubManager(this.#token);
	}
}

/**
 * The options to construct the Client
 */
interface ClientOptions {
	/**
	 * The token to use for the API
	 * @default process.env.BRAWLSTARS_TOKEN
	 * @since 1.0.0
	 */
	token?: string;
}
