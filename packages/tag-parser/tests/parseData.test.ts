import { TagParser } from '../src';

test('parse command data', () => {
	const tagParser = new TagParser();
	const data = tagParser.parseData('name', 'description', '{{unit|unit|string}} {{test|test|string}}', 'res');
	expect(data).toEqual({
		data: {
			description: 'description',
			name: 'name',
			options: [
				{
					description: 'unit',
					name: 'unit',
					type: 'string'
				},
				{
					description: 'test',
					name: 'test',
					type: 'string'
				}
			]
		},
		response: 'res'
	});
});
