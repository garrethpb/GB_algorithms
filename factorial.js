function factorial(num) {

	var product = num;
	for (var i = num - 1; i > 1; i--) {
		num *= i;
	}
	return num;
}

console.log(factorial(8));

// Challenge: Write a function that, given a number, calculates and returns the product (multiplication) of all positive integers from 1 up to the number (inclusive).