import { Stopwatch } from './Stopwatch';
import { Client } from '../src';
import 'dotenv/config';

test('test internal caching system for players', async () => {
	const client = new Client();
	const stopwatch = new Stopwatch();
	// @ts-expect-error need this for test
	const player = await client.players.fetch('#22QJ0JPVJ');
	const { duration } = stopwatch;
	stopwatch.restart();
	// @ts-expect-error need this for test
	const player2 = await client.players.fetch('#22QJ0JPVJ');
	const { duration: cacheDuration } = stopwatch;
	// cached player is returned in nanoseconds while uncached player is returned in seconds
	expect(Number(cacheDuration.toFixed(0)) < Number(duration.toFixed(0))).toBe(true);
});

test('test internal caching system for clubs', async () => {
	const client = new Client();
	const stopwatch = new Stopwatch();
	// @ts-expect-error need this for test
	const club = await client.clubs.fetch('#2CU9RRVL');
	const { duration } = stopwatch;
	stopwatch.restart();
	// @ts-expect-error need this for test
	const club2 = await client.clubs.fetch('#2CU9RRVL');
	const { duration: cacheDuration } = stopwatch;
	// cached club is returned in nanoseconds while uncached club is returned in seconds
	expect(Number(cacheDuration.toFixed(0)) < Number(duration.toFixed(0))).toBe(true);
});
