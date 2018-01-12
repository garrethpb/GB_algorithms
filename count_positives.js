var arr1 = [-1,1,1,1]

function countPositive(array) {
	var posNum = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			posNum = posNum + 1;
		} 
		array[array.length - 1] = posNum;
	}
	return array
}
console.log(countPositive(arr1));




// Challenge: Given an array of numbers, create a function to replace the last value with the number of positive values in the array. Ex., countPositive([-1,1,1,1]) would print [-1,1,1,3].



