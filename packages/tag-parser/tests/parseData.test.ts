import { TagParser } from '../src';

test('parse command data', () => {
	const tagParser = new TagParser();
	const data = tagParser.parseData('name', 'description', '{{unit|unit|unit}} {{test|test|test}}', 'res');
	expect(data).toEqual({
		data: {
			description: 'description',
			name: 'name',
			options: [
				{
					description: 'unit',
					name: 'unit',
					type: 'unit'
				},
				{
					description: 'test',
					name: 'test',
					type: 'test'
				}
			]
		},
		response: 'res'
	});
});
