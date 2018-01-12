function countdown(start, stop) {
	var num = start;
	while (num > stop) {
		console.log(num);
		num -= 4;
	}
}

countdown(2016, 3);


// Challenge: Log positive numbers starting at 2016, counting down by fours (exclude 0)
// without a FOR loop.