function multiplesOfThree() {
	var array = [];
	for (var i = -300; i < 1; i++) {
		if (i % 3 === 0 && i !== -3 && i !== -6) {
			array.push(i);
		}
	}
	return array;
}
console.log(multiplesOfThree());