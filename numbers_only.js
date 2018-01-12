var array = ["Correa", 1, "Altuve", 27, "Springer", 4];

function numbersOnly(array) {
	var new_array = [];
	
	for (var i = 0; i < array.length; i++) {
		if(typeof(array[i]) == "number") {
			new_array.push(array[i])
		}
	}
	
	console.log(new_array);
	
	return new_array;
}

numbersOnly(array);

// Challenge: Create a function that accepts an array of mixed values (numbers , strings, booleans) and creates a new array containing the numbers only.