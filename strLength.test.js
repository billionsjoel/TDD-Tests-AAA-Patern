const functions = require('./strLength');

test('is a number', () => {
	expect(functions.strLen('billions')).toBe(8);
});

test('is a number', () => {
	expect(functions.strLen('joel')).toBe(4);
});

test('is a number', () => {
	expect(functions.strLen('Billions joel')).toBe(
		'Error : length must be greater than 0 and less that 10'
	);
});

test('is less than 11', () => {
	expect(functions.testStr(9)).toBeLessThan(11);
});

test('is greater than 0', () => {
	expect(functions.testStr(1)).toBeGreaterThan(0);
});
