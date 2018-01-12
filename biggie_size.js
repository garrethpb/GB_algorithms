var arr = [-1, 5, 17, -32, 0]

function biggieSize(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 0) {array[i] = "BIG"}
	}
	return array;
} 

console.log(biggieSize(arr));



// Challenge: Given an array, write a function that changes all positive numbers in the array to "BIG".