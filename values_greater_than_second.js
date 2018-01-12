array = [1,3,5,7,9,13];

function returnGreater() {
	var counter = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[1]) {
			counter = counter + 1;
			console.log(array[i]);	
		} 
	}
	console.log("There are " + counter + " values greater than the second value.");
}

returnGreater(array);


// Challenge: Given the array [1,3,5,7,9,13], print the values that are greater than the 2nd value. Then return how many values this is.