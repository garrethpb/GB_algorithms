function countdown(num) {
	var arr = [];
	var num = num;
	while (num >= 0) {
		arr.push(num);
		num = num - 1;
	}
	console.log("The array is " + arr.length + " values long.");
	return arr;
}
		
console.log(countdown(22));


// Challenge: Create a function that accepts a number as an input. Return a new array that counts down by one, from the number down to 0. How long is this array? 