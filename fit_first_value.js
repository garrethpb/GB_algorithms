

function fitTheFirstValue(arr) {
	if(arr.length < arr[0]) {
		console.log("Too big!");
	} else if(arr.length > arr[0]) {
		console.log("Too small!");
	} else {
		console.log("Just right!");
	}
}

fitTheFirstValue([1]);
fitTheFirstValue([4,3,6]);
fitTheFirstValue([1,6,8]);



// challenge: Write a function that accepts an array. If the value at [0] is greater than the array's length, print "Too big!"; if the value at [0] is less than the array's length, print "Too small!"; otherwise, print "Just right."