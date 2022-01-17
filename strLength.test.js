const strlen = require('./strLength');

test('is a number', () => {
	expect(strlen('billions')).toBe(8);
});

test('is a number', () => {
	expect(strlen('joel')).toBe(4);
});

test('is a number', () => {
	expect(strlen('Billions joel')).toBe(12);
});
