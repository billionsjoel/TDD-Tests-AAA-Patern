let strLen = (str) => {
	let arr = str.trim().replace(' ', '').split('');
	let count = 0;
	if (str.length <= 0 || str.length > 10) {
		return 'Error : length must be greater than 0 and less that 10';
	} else {
		arr.forEach((element) => {
			count++;
		});
	}

	return count;
};

strLen('james gasoline');

module.exports = strLen;
