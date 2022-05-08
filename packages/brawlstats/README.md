<div align="center">

# brawlstats

**An advanced and lightweight wrapper around the Brawl Stars API**

[![npm](https://img.shields.io/npm/dw/brawlstats)](https://www.npmjs.com/package/brawlstats)
[![GitHub](https://img.shields.io/github/license/specteralabs/brawlstats)](https://github.com/SpecteraLabs/brawlstats/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/brawlstats?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/brawlstats)
[![codecov](https://codecov.io/gh/SpecteraLabs/npm-packages/branch/main/graph/badge.svg)](https://codecov.io/gh/SpecteraLabs/npm-packages)
[![CI](https://github.com/SpecteraLabs/npm-packages/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/SpecteraLabs/npm-packages)
</div>

## Description
An advanced API wrapper for the Brawl Stars API.

## Features
- Written in Typescript.
- Supports both ES modules and CommonJS.

## Installation
```bash
yarn add brawlstats
# or npm install brawlstats
# or pnpm add brawlstats
```

## Usage
### With ESM
```js
import { Client } from 'brawlstats';
const client = new Client({
	/**
	 * Your Brawl Stars API key.
	 * @defaults to the environment variable `BRAWLSTARS_TOKEN`
	*/
	token: 'your-api-key'
})

// get a player
const player = await client.players.fetch('#22QJ0JPVJ');
// or a club
const club = await client.clubs.fetch('#XYZ');
// or events rotation
const events = await client.rotation.get();
// or all brawlers available in the game
const brawlers = client.brawlers;
```

### With CJS
```js
const { Client } = require('brawlstats');
const client = new Client({
	/**
	 * Your Brawl Stars API key.
	 * @defaults to the environment variable `BRAWLSTARS_TOKEN`
	*/
	token: 'your-api-key'
})

(async () => {
	// get a player
	const player = await client.players.fetch('#22QJ0JPVJ');
	// or a club
	const club = await client.clubs.fetch('#XYZ');
	// or events rotation
	const events = await client.rotation.get();
	// or all brawlers available in the game
	const brawlers = client.brawlers;
})();
```

## Miscallaneous
* Like the wrapper? then please star us at [GitHub](https://github.com/SpecteraLabs/npm-packages)
* If you have any questions, feel free to [open an issue](https://github.com/SpecteraLabs/npm-packages/issues)
* If you have any feedback, feel free to [open a discussion](https://github.com/SpecteraLabs/npm-packages/discussions/new?category=ideas)
