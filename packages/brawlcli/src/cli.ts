#!/usr/bin/env node

import { Command } from 'commander';
import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { getPlayer } from '#commands/player';

const brawlstats = new Command();

const pkg = new URL('../package.json', import.meta.url);
const { version } = JSON.parse(await readFile(pkg, 'utf-8'));

brawlstats //
	.name('brawlstats')
	.version(version);

brawlstats
	.command('player')
	.description('Get info of a player via their tag')
	.alias('fp')
	.argument('<tag>', 'the tag of the player')
	.action(getPlayer);

brawlstats.parse(process.argv);
