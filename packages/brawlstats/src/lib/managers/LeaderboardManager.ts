import Collection from '@discordjs/collection';
import { makeBrawlersMap } from '../makeBrawlersMap';
import { Leaderboard } from '../structures/Leaderboard';
import { Structure } from '../structures/Structure';
import type { BrawlersType } from '../types';
import { from } from '../utils';

export class LeaderboardManager {
	#token: string;

	public constructor(token: string) {
		this.#token = token;
	}

	/**
	 * Fetch the leaderboards of a player or a club.
	 * @param {RestLeaderboardOptions} options Options for the leaderboards.
	 */
	public fetch(options: RestLeaderboardOptions): Promise<Collection<string, Leaderboard>>;
	/**
	 * Fetch the leaderboards of a brawler.
	 * @param {LeaderboardBrawlerOptions} options Options for the leaderboards.
	 */
	public fetch(options: LeaderboardBrawlerOptions): Promise<Collection<string, Leaderboard>>;
	/**
	 * Fetch the leaderboards.
	 * @param {LeaderboardOptions} options Options for the leaderboards.
	 */
	public fetch(options: LeaderboardOptions): Promise<Collection<string, Leaderboard>> {
		const structure = new Structure('rankings');
		let { mode, region, name } = options;
		return from(async () => {
			name = name ?? 'SHELLY';
			region ??= 'global';
			const endpoint = mode === 'brawlers' ? `${region}/brawlers/${makeBrawlersMap().get(name)?.id}` : `${region}/${mode}`;
			const data = await structure.request<{ items: Leaderboard[]; paging: unknown }>(endpoint, this.#token);
			switch (mode) {
				case 'players': {
					const players = new Collection<string, Leaderboard>();
					for (const player of data.items) {
						const leaderboard = new Leaderboard(player);
						players.set(leaderboard.tag, leaderboard);
					}
					return players;
				}
				case 'brawlers': {
					const brawlers = new Collection<string, Leaderboard>();
					for (const player of data.items) {
						const leaderboard = new Leaderboard(player);
						brawlers.set(leaderboard.tag, leaderboard);
					}
					return brawlers;
				}
				case 'clubs': {
					const clubs = new Collection<string, Leaderboard>();
					for (const club of data.items) {
						const leaderboard = new Leaderboard(club);
						clubs.set(leaderboard.tag, leaderboard);
					}
					return clubs;
				}
			}
		});
	}
}

export interface LeaderboardOptions {
	mode: 'players' | 'clubs' | 'brawlers';
	region: string;
	name?: BrawlersType;
}
export interface LeaderboardBrawlerOptions {
	mode: 'brawlers';
	region: string;
	name: BrawlersType;
}
export interface RestLeaderboardOptions {
	mode: 'players' | 'clubs';
	region: string;
}
