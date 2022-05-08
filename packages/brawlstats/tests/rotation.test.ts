import 'dotenv/config';
import { Client } from '../src';

test('Check if an event rotation is returned', async () => {
	const client = new Client();
	const events = await client.rotation.get({
		timezone: 'Asia/Kolkata'
	});
	expect(events.length).toBe(12);
});
