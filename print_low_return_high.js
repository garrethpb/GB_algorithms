var arr1 = [1,2,3,4,5,6];
		
function printLowReturnHigh(arr) {
	console.log('Printed (low) value: ' + Math.min(...arr));
	return Math.max(...arr);
}

var returnedVal = printLowReturnHigh(arr1);
console.log('Returned (high) value: ', returnedVal);

// Challenge: Create a function that accepts an array of numbers. The function should print the low number and return the high number.