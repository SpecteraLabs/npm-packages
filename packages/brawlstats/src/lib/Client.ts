import { BrawlersMap } from './Brawlers';
import { Club } from './Club';
import { Event } from './Events';
import { Player } from './Player';

export class Client {
	#token!: string;
	public options: ClientOptions;

	public constructor(options?: ClientOptions) {
		this.options = options!;
		this.#token = options?.token ?? (process.env.BRAWLSTARS_TOKEN as string);
	}

	/**
	 * Get details of a player from the API.
	 * @param {String} tag The tag of the player.
	 * @async
	 * @returns {Promise<Player>} The player from the api
	 */
	public async getPlayer(tag: string): Promise<Player> {
		tag = tag.replace('#', '%23');
		return Player.getPlayer(tag, this.#token);
	}

	/**
	 * Get a list of brawlers from the API which are sent back to you as a {@link BrawlersMap}.
	 * @async
	 * @returns {Promise<BrawlersMap>} The brawlers map from the api
	 */
	public async getBrawlers(): Promise<BrawlersMap> {
		const res = new BrawlersMap(this.#token);
		return res.init();
	}

	/**
	 * Get details of a club from the API.
	 * @async
	 * @param {String} tag The tag of the club.
	 * @returns {Promise<Club>} The club from the api.
	 */
	public async getClub(tag: string): Promise<Club> {
		tag = tag.replace('#', '%23');
		return Club.getClub(tag, this.#token);
	}

	/**
	 * Get the events rotation from the API.
	 * @async
	 * @returns The events from the api.
	 */
	public async getRotation() {
		return Event.getRotation(this.#token);
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
