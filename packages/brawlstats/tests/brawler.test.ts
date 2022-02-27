import { Client, Brawlers, LogLevel } from '../src';
import 'dotenv/config';

test('Test if a brawler is fetched', async () => {
	const client = new Client({
		logger: {
			level: LogLevel.Debug,
			depth: 0
		}
	});
	await client.login();
	expect(client.brawlers.get(Brawlers.SHELLY)).toEqual({
		id: 16000000,
		name: 'SHELLY',
		starPowers: [
			{
				id: 23000076,
				name: 'SHELL SHOCK'
			},
			{
				id: 23000135,
				name: 'BAND-AID'
			}
		],
		gadgets: [
			{
				id: 23000255,
				name: 'FAST FORWARD'
			},
			{
				id: 23000288,
				name: 'CLAY PIGEONS'
			}
		]
	});
});
