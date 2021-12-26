import { TagParser } from '../src';

test('parse tag response', () => {
	const tagParser = new TagParser();
	const interaction = {
		member: {
			name: 'John Doe',
			id: '123456789',
			mention: '<@123456789>'
		},
		user: 'user',
		channel: 'channel',
		guild: 'guild'
	};
	const response = tagParser.parseResponse('{{member.mention}} {{user}} {{channel.name}} {{guild}}', interaction);
	expect(response).toEqual('<@123456789> user undefined guild');
});

test('parse a greeting', () => {
	const tagParser = new TagParser();
	const interaction = {
		member: {
			displayName: 'tester',
			discriminator: '6206',
			tag: 'tester#6206'
		}
	};
	const response = tagParser.parseResponse('Hello {{member.tag}}', interaction);
	expect(response).toEqual('Hello tester#6206');
});
