let strLen = (str) => {
	let arr = str.trim().replace(' ', '').split('');
	let count = 0;
	arr.forEach((element) => {
		count++;
	});
	console.log(count);
};

strLen('james gasoline');
