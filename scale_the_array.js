var arr1 = [1,2,3,4,5,6];

function scaleArray(array, num) {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i] * num;
	}
	return array;
}

console.log(scaleArray(arr1,3));

// Challenge: Create a function that accepts an array (of numbers) and num. The function should return the original array, multiplied by num.