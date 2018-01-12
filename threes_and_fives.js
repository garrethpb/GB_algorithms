function threeFives(start,stop) {
	var sum = 0;
	var i = start;
	while(i <= stop) {
		if(!(i % 3 === 0 && i % 5 === 0) && (i % 3 === 0 || i % 5 === 0)) {
			sum += i;
		}
		i++
	}
	return sum;
}

console.log(threeFives(0,9));

// Challenge: Create a function threeFives(start,stop). This function should keep a running sum of all numbers in range that are divisible by 3 or divisible by 5 but NOT divisible by both 3 and 5.