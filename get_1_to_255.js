function getArray() {
	var array = [];
	for (var i = 1; i < 256; i++) {
		array.push(i);
	}
	return array;
}

console.log(getArray());

// Challenge: Build a function that constructs and outputs an array that contains all whole numbers between 1 and 255.