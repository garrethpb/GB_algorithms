var arr1 = [1,2,3,4,5]

function addSevenToMost(array) {

	var newArray = [];

	for (var i = 1; i < array.length; i++) {
		newArray.push(array[i] + 7);
	}

	return newArray;

}

console.log(addSevenToMost(arr1));

// Challenge: Create a function that accepts an array of numbers. Return a new array with all the values except the first, adding 7 to each. Ex: [1,2,3,4,5] should log [9,10,11,12].