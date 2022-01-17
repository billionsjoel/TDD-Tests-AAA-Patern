class calc {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add(a, b) {
		return this.a + this.b;
	}

	sub(a, b) {
		return this.a - this.b;
	}

	multiply(a, b) {
		return this.a * this.b;
	}

	div(a, b) {
		return this.a / this.b;
	}
}

const ans = new calc(2, 4);
ans.add();
module.exports = calc;
