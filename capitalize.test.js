capitalize = require('./capitalize.js');

test('The first letter is capital', () => {
	expect(capitalize('billions')).toBe('Billions');
});
