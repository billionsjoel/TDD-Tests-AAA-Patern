const calc = require('./calc');

describe('answer is ', () => {
	const ans1 = new calc(2, 2);
	const ans2 = new calc(4, 2);
	const ans3 = new calc(5, 2);

	test('added', () => {
		expect(ans1.add()).toBe(4);
	});
	test('added', () => {
		expect(ans2.add()).toBe(6);
	});
	test('added', () => {
		expect(ans3.add()).toBe(7);
	});

	test('subtracted', () => {
		expect(ans1.sub()).toBe(0);
	});
	test('subtracted', () => {
		expect(ans2.sub()).toBe(2);
	});
	test('subtracted', () => {
		expect(ans3.sub()).toBe(3);
	});

	test('multiplied', () => {
		expect(ans1.multiply()).toBe(4);
	});
	test('multiplied', () => {
		expect(ans2.multiply()).toBe(8);
	});
	test('multiplied', () => {
		expect(ans3.multiply()).toBe(10);
	});


});
