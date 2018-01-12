var testArray = [2,3,4,5];

function pushFront(array, value) {
	for (var i = array.length; i > 0; i--) {
		array[i] = array[i - 1]
	}
	
	array[0] = value;
	console.log(array);
	return array;
}

pushFront(testArray, 1);


// Challenge: Given an array and an additional value, insert the value at the beginning of the array. Do this witouth using any built-in array methods.