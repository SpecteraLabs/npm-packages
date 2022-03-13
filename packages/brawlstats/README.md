<div align="center">

# brawlstats

**An advanced tags system for slash commands**

[![GitHub](https://img.shields.io/github/license/specteralabs/brawlstats)](https://github.com/SpecteraLabs/brawlstats/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/brawlstats?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/brawlstats)
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
import { Client, LogLevel } from 'brawlstats';
const client = new Client({
	/**
	 * Your Brawl Stars API key.
	 * @defaults to the environment variable `BRAWLSTATS_TOKEN`
	*/
	token: 'your-api-key'
})

// get a player
const player = await client.getPlayer('#22QJ0JPVJ');
// or a club
const club = await client.getClub('#XYZ');
// or events rotation
const events = await client.getRotation();
// or all brawlers available in the game
const brawlers = await client.getBrawlers();
```

### With CJS
```js
const { Client, LogLevel } = require('brawlstats');
const client = new Client({
	/**
	 * Your Brawl Stars API key.
	 * @defaults to the environment variable `BRAWLSTATS_TOKEN`
	*/
	token: 'your-api-key'
})

(async () => {
	// get a player
	const player = await client.getPlayer('#22QJ0JPVJ');
	// or a club
	const club = await client.getClub('#XYZ');
	// or events rotation
	const events = await client.getRotation();
	// or all brawlers available in the game
	const brawlers = await client.getBrawlers();
})();
```

## Miscallaneous
* Like the wrapper? then please star us at [GitHub](https://github.com/SpecteraLabs/brawlstats)
* If you have any questions, feel free to [open an issue](https://github.com/SpecteraLabs/brawlstats/issues)
* If you have any feedback, feel free to [open a discussion](https://github.com/SpecteraLabs/brawlstats/discussions/new?category=ideas)