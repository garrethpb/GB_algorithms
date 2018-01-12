
var myArr = [5, 8, 102, 123, 5, 123, 4, 77, 8]

function printOneReturnAnother(arr) {
	var lowest = arr[0];
	var highest = arr[0];
	console.log("lowest: ", lowest, "highest: ", highest);

	for(var i = 1; i < arr.length; i++) {
		if (arr[i] < lowest) {
			lowest = arr[i];
			console.log(lowest);
		}
		if (arr[i] < highest) {
			highest = arr[i];
			console.log(highest);
		}
	}
	console.log("lowest after for: ", lowest);
	return highest;

}
console.log(printOneReturnAnother(myArr));