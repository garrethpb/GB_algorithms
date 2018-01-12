arr1 = ["pig", "flamingo", "badger", "elephant", "lynx"]

function stringLength(array) {

	for (var i = array.length - 1; i > 0; i--) {
		array[i] = array[i - 1].length;
	}
	return array;
}

console.log(stringLength(arr1));


// Challenge: Create a function that accepts an array of strings. The function should replace each string with a number corresponding to the length of the previous string.