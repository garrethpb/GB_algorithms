
function sumEvenNumbers() {
	var sum = 0;
	for (var i = 0; i < 1001; i++) {
		if(i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(sumEvenNumbers());

// Challenge: Create a function that returns the sum of all even numbers between 1 and 1000.