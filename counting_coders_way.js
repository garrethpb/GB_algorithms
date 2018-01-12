var num = 1;
		
while (num < 101) {
	if (num % 10 === 0) {
		console.log("Hello");
	}
	else if (num % 5 === 0) {
		console.log("World");
	}
	else {
		console.log(num + " ");
	}
	num = num + 1;
}


// Challenge: Print integers 1 to 100. If integer is divisible by 5, print "Hello" instead. If integer is divisible by 10, print "World" instead.