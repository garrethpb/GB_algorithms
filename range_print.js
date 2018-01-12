function printRange(rangeStart, rangeStop, step) {
	for (i = rangeStart; i <= rangeStop; i += step) {
	console.log(i);
	}
}

printRange(3,99,3);

// Challenge: Create a function that accepts three arguments (start, stop, step). The function should return all numbers within the range of start and stop, incrementing by step.