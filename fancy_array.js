var array = ["Correa", "Springer", "Altuve", "Bregman"];

function printFancy() {
	for (var i = 0; i < array.length; i++) {
		console.log("--> " + array[i])
	}
}

printFancy(array)

// Challenge: Create a function that accepts an array. The function should return the contents of the array, printing each on a separate line, with "-->" preceding each item.