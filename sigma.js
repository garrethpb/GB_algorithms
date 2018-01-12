function findSigma(num) {
	var total = 0;
	for(var i = 0; i <= num; i++) {
		total += i;
	}
	return total;
}

console.log(findSigma(25));

// Challenge: Create a function that accepts a number and returns its sigma, that is the sum of all positive integers up to the number (inclusive). Ex: findSigma(3) = 6(1+2+3).