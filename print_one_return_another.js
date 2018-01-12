var myArray = [45, 7, 28, 32, 5, 12, 99]

function printOneReturnAnother(arr) {
	console.log(arr[arr.length - 2]);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			return arr[i];
		}
	}
	return false;
}

console.log(printOneReturnAnother(myArray));



// Challenge: Build a function that takes an array of numbers. The function should print the second-to-last value in the array and return the first odd value in the array. 