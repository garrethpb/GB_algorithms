arr = [1,2,3,4,5,6,7]
		
function findMax(arr) {
	var max = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i]
		}
	}
	return max;
}

console.log(findMax(arr));

// Challenge: Given an array of integers, write a function that prints the highest value only.