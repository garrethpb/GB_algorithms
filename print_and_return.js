var array1 = [5,15]

function printAndReturn(arr) {
	console.log(arr[0]);
	return arr[1];
}

var returnedVal = printAndReturn(array1);
console.log("Returned value: ", returnedVal);


function doubleValue(num) {
	return num *= 2;
}

console.log("Doubled value: ", doubleValue(returnedVal));

// Challenge: Create a function that accepts an array with two numbers. The function should print the first value, return the second, then also double the second value.