var arr1 = [3,1,6,4,2] 

function reverseArray(array) {
	var newArr = [];
	for (var i = array.length - 1; i >= 0; i--) {
		newArr.push (array[i]);
	}
	return newArr;
}

console.log(reverseArray(arr1));

// Challenge: Create a function that accepts an array and returns it in reverse. For example [3,1,6,4,2] should become [2,4,6,1,3].