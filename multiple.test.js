const multiply = require('./multiple');

describe('test multiply positive',() => {
	test('multiply 3*2 should equal to 6', () => {
		expect(multiply(3,2)).toBe(6);
	});

	test('obj example', () => {
		const data = { first: 1 };
		data['second'] = 2;
			expect(data).toStrictEqual({ first: 1, second: 2 });
	});
})
