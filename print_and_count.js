var start = 5;
var stop = 25; 

function printFives(start, stop) {
	var array = [];
	for (var i = start; i < stop + 1; i++) {
		if (i % 5 === 0) {
			array.push(i);
		}
	}
	return array;
}

var newArray = printFives(start, stop);		
console.log(printFives(start, stop));
console.log("There are " + newArray.length + " items in the new array.");

// Challenge: Create a function that creates an array containing all multiples of 5 within a given range. Also, log how many items are in the new array.


