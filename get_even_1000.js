function getEvenNumbers() {
	var sum = 0;
	for (var i = 1; i < 1001; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(getEvenNumbers());

// Challengel: Write a function that finds the sum of all even numbers from 1 to 1000.