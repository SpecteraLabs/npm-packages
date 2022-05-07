import 'dotenv/config';
import { Client } from '../src';

test('Check if a valid players leaderboard is returned', async () => {
	const client = new Client();
	expect((await client.leaderboards.fetch({ mode: 'players', region: 'global' })).size).toBe(200);
});

test('Check if a valid clubs leaderboard is returned', async () => {
	const client = new Client();
	expect((await client.leaderboards.fetch({ mode: 'clubs', region: 'global' })).size).toBe(200);
});

test('Check if a valid brawlers leaderboard is returned', async () => {
	const client = new Client();
	expect((await client.leaderboards.fetch({ mode: 'brawlers', region: 'global', name: 'AMBER' })).size).toBe(200);
});
