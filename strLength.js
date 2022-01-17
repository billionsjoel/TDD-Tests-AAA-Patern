let strLen = (str) => {
	let arr = str.trim().replace(' ', '').split('');
	let count = 0;
	arr.forEach((element) => {
		count++;
	});
	return count;
};

strLen('james gasoline');

module.exports = strLen;
