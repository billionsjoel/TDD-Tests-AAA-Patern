reverse = require('./revStr.js');

test('String is reversed', () => {
	expect(reverse('hello')).toBe('olleh');
});
