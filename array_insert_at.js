var testArray = [1,2,4,5]

function insertAt(array, index, value) {
	for (var i = array.length; i > index; i--) {
		array[i] = array[i - 1]
	}
	array[index] = value;
	console.log(array);
	return array;
}

insertAt(testArray, 2, 3);


// Challenge: Given an array, index, and additional value, insert the value into the array at the given index. Do not use built-in array methods.