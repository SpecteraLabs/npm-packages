#!/usr/bin/env node

import { Command } from 'commander';
import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';

const brawlstats = new Command();

const packageJSON = new URL('../package.json', import.meta.url);
const { version } = JSON.parse(await readFile(packageJSON, 'utf-8'));

brawlstats //
	.name('brawlstats')
	.version(version);

// TODO
