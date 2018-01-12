arr = [1,2,3,4,5,6]
		
function iterateArray() {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

console.log(iterateArray());

// Challenge: Create a function that accepts an array of numbers and returns the sum of all the numbers.