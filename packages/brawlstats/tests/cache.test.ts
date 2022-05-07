import { Stopwatch } from './Stopwatch';
import { Client } from '../src';
import 'dotenv/config';

test('test internal caching system', async () => {
	const client = new Client();
	const stopwatch = new Stopwatch();
	const player = await client.players.fetch('#22QJ0JPVJ');
	console.log(stopwatch.stop().toString(), !player);
	stopwatch.restart();
	const player2 = await client.players.fetch('#22QJ0JPVJ');
	console.log(stopwatch.stop().toString(), !player2);
});
