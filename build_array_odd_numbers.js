function oddNumbers(start, stop) {
	var arr = [];
	for (var i = start; i < stop; i++) {
		if (i % 2 !== 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(oddNumbers(1, 13));


// Build a function that, given a range of numbers, returns an array containing only the odd numbers within the given range.