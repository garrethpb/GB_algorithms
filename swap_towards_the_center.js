arr1 = [1,2,3,4,5,6,7]

function swapTowardCenter(array) {
	for (var i = 0; i < array.length / 2; i += 2) {
		var temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return array;
}

console.log(swapTowardCenter(arr1));




// Challenge: Given array, swap first and last, third and third-to-last, etc. Ex: Change [1,2,3,4,5,6] to [6,2,4,3,5,1].