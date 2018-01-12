arr1 = ["pig", "flamingo", "badger", "elephant", "lynx"]

function stringLength(array) {

	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].length;
	}
	return array;
}


console.log(stringLength(arr1));


// Challenge: Create a function that accepts an array of strings and returns an array containing only numbers. Each number will be the length of the string that has been replaced.

