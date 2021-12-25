import { TagParser } from '../src';

test('parse tag response', () => {
	const tagParser = new TagParser();
	const interaction = {
		member: 'member',
		user: 'user',
		channel: 'channel',
		guild: 'guild'
	};
	const response = tagParser.parseResponse('{{member}} {{user}} {{channel.name}} {{guild}}', interaction);
	expect(response).toEqual('member user channel.name guild');
});
