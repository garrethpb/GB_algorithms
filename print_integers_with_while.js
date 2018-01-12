function printIntegers (start, stop) {
	var num = start;
	while (num >= start && num <= stop) {
		console.log(num + "\n");
		num = num + 1;
	}
}

printIntegers(2000, 5280);

// Challenge: Create a function that prints numbers within a given range (start, stop) with a WHILE loop. Also, have each number print on a separate line.