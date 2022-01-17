const calc = require('./calc');

describe('answer is ', () => {
	const ans1 = new calc(2, 2);
	const ans2 = new calc(4, 2);
	const ans3 = new calc(5, 2);

	const ans = new calc(2, 2);

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
		expect(ans.sub()).toBe(0);
  });

	test('multiplied', () => {
		expect(ans.multiply()).toBe(4);
	});
	test('divided', () => {
		expect(ans.div()).toBe(1);
	});
});