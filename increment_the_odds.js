var arr1 = [1,2,3,4,5,6,7,8]

function returnTheSeconds(arr) {
for (i = 0; i < arr.length; i++) {
	if(arr[i] % 2 !== 0) {
		  arr[i] += 1;
	} 
}
	return arr;
}

console.log(returnTheSeconds(arr1));



// Challenge: Given an array, add 1 to the odd elements ([1],[3], etc), console.log all values and return the array. So given array [1,2,3,4,5,6,7,8], the output should be [2,2,4,4,6,6,8,8]