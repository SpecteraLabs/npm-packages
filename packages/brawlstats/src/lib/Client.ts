import { container } from '../internal/container';
import { makeBrawlersMap } from './makeBrawlersMap';
import { BattlelogManager } from './managers/BattlelogManager';
import { ClubManager } from './managers/ClubManager';
import { LeaderboardManager } from './managers/LeaderboardManager';
import { PlayerManager } from './managers/PlayerManager';
import { RotationManager } from './managers/RotationManager';

export class Client {
	#token!: string;
	public options: ClientOptions;
	public brawlers = makeBrawlersMap();
	public players: PlayerManager;
	public clubs: ClubManager;
	public rotation: RotationManager;
	public leaderboards: LeaderboardManager;
	public battlelogs: BattlelogManager;

	public constructor(options?: ClientOptions) {
		this.options = options!;
		container.options = this.options;
		this.#token = options?.token ?? (process.env.BRAWLSTARS_TOKEN as string);
		this.players = new PlayerManager(this.#token);
		this.clubs = new ClubManager(this.#token);
		this.rotation = new RotationManager(this.#token);
		this.leaderboards = new LeaderboardManager(this.#token);
		this.battlelogs = new BattlelogManager(this.#token);
	}
}

/**
 * The options to construct the Client
 */
export interface ClientOptions {
	/**
	 * The token to use for the API
	 * @default process.env.BRAWLSTARS_TOKEN
	 */
	token?: string;
	cache?: CacheType;
}

interface CacheType {
	player?: {
		timeout: number;
	};
	club?: {
		timeout: number;
	};
}
