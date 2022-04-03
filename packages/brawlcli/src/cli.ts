#!/usr/bin/env node

import { Argument, Command } from 'commander';
import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';
import { getPlayer } from '#commands/player';

const brawlstats = new Command();

const pkg = new URL('../package.json', import.meta.url);
const { version } = JSON.parse(await readFile(pkg, 'utf-8'));

brawlstats //
	.name('brawlstats')
	.version(version)
	.showSuggestionAfterError();

brawlstats
	.command('player')
	.description('Get info of a player via their tag')
	.alias('p')
	.addArgument(new Argument('<tag>', 'the tag of the player').argRequired())
	.option('-b, --battlelog', "get the player's battlelog")
	.option('-br, --brawlers', "get the player's brawlers")
	.action(getPlayer);

brawlstats.parse(process.argv);
