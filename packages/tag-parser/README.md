<div align="center">

# @spectera/tag-parser

**An advanced tags system for slash commands**
</div>

## Description

Advanced slash tags system for [Tagger](https://github.com/SpecteraLabs/Tagger)

## Features
- Written in Typescript and bundled with Rollup.
- Supports both ES modules and CommonJS.

## Installation
```bash
yarn add @spectera/tag-parser
# or npm install @spectera/tag-parser
# or pnpm add @spectera/tag-parser
```

## Usage
This is some basic usage of the tag parser.
```javascript
const { TagParser } = require('@spectera/tag-parser');

const tagparser = new TagParser();
tagparser.parseResponse('Hello {{user}}!', { user: 'Spectera' });
// => 'Hello Spectera!'
```

```typescript
import { TagParser } from '@spectera/tag-parser';

const tagparser = new TagParser();
tagparser.parseResponse('Hello {{user}}!', { user: 'Spectera' });
// => 'Hello Spectera!'
```
Much more to be completed in this readme