import { Client, Brawlers } from '../src';
import 'dotenv/config';

test('Test if a brawler is fetched', async () => {
	const client = new Client();
	const brawlers = await client.getBrawlers();
	expect(brawlers.get(Brawlers.SHELLY)).toEqual(brawlers.get('SHELLY'));
});
