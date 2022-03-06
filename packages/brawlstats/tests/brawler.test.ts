import { Client, Brawlers, LogLevel } from '../src';
import 'dotenv/config';

test('Test if a brawler is fetched', async () => {
	const client = new Client({
		logger: {
			level: LogLevel.Debug,
			depth: 0
		}
	});
	const brawlers = await client.getBrawlers();
	expect(brawlers.get(Brawlers.SHELLY)).toEqual(brawlers.get('SHELLY'));
});
