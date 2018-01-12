arr = [1,2,3,4]
		
function findAverage() {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i]
	}
	return sum/arr.length;
}

console.log(findAverage(arr));

// Challenge: Given as array of integers, write a function that finds the average of all members.