import { TagParser } from '../src';

test('parse command data', () => {
	const tagParser = new TagParser();
	const data = tagParser.parseData({name: 'name', description: 'description', options: '{{unit|unit|string}} {{test|test|string|true}}', response: 'res'});
	expect(data).toEqual({
		data: {
			description: 'description',
			name: 'name',
			options: [
				{
					description: 'unit',
					name: 'unit',
					required: false,
					type: 'string'
				},
				{
					description: 'test',
					name: 'test',
					required: true,
					type: 'string'
				}
			]
		},
		response: 'res'
	});
});
