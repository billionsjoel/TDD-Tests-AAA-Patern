const strlen = require('./strLength');

test('is a number', () => {
	expect(strlen('billions')).toBe(8);
});

