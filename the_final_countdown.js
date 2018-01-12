function finalCountdown(lowNum, highNum, mult) {
	for (var i = highNum; i >= lowNum; i -= mult) {
		console.log(i);
	}
}

finalCountdown(2,9,3);


// Challenge: Given lowNum, highNum, and mult, print multiples of mult from highNum to lowNum using a FOR loop. For example, if given (2,9,3), 9 6 3 should be printed.