#!/usr/bin/env node

import { Command } from 'commander';
import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { getPlayer } from '#commands/player';
import { getBrawler } from '#commands/brawlers';

const brawlstats = new Command();

const pkg = new URL('../package.json', import.meta.url);
const { version } = JSON.parse(await readFile(pkg, 'utf-8'));

brawlstats //
	.name('brawlstats')
	.version(version)
	.showSuggestionAfterError();

brawlstats //
	.command('player')
	.description('Get info of a player via their tag')
	.alias('p')
	.argument('<tag>', 'the tag of the player')
	.option('-b, --battlelog', "get the player's battlelog")
	.option('-br, --brawlers', "get the player's brawlers")
	.action(getPlayer);

brawlstats //
	.command('brawlers')
	.description('Get info of a brawler via their name')
	.alias('b')
	.argument('[name]', 'the name of the brawler')
	.action(getBrawler);

brawlstats.parse(process.argv);
