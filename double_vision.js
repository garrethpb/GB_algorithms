var arr = [4,7,13,55]
		
function doubleArray(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i] * 2;
	}
	return array;
}

console.log(doubleArray(arr));


// Challenge: create a function that takes an array as an argument and doubles all numbers in array, returning a new array.