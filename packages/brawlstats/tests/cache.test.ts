import { Stopwatch } from './Stopwatch';
import { Client } from '../src';
import 'dotenv/config';

test('test internal caching system', async () => {
	const client = new Client();
	const stopwatch = new Stopwatch();
	// @ts-expect-error need this for test
	const player = await client.players.fetch('#22QJ0JPVJ');
	const { duration } = stopwatch;
	stopwatch.restart();
	// @ts-expect-error need this for test
	const player2 = await client.players.fetch('#22QJ0JPVJ');
	const { duration: cacheDuration } = stopwatch;
	// cached player is returned in nanoseconds while uncache player is returned in seconds
	expect(cacheDuration * 1000 < duration).toBe(true);
});
