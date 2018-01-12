function isLeapYear(year) {
	if ( year % 4 != 0 ) {
		console.log(year + " is not a leap year.");
	}

	else {
		if ( year % 400 == 0 ) {
			console.log(year + " is a leap year.");
		}

		else if ( year % 100 == 0 ) {
			console.log(year + " is not a leap year.")
		}

		else {
			console.log(year + " is a leap year.")
		}

	}
}

console.log(isLeapYear(2015));

// Challenge: Create a function that determines whether or not a given year is a leap year. The rules for a leap year are as follows: The year can be evenly divided by 4. If the year can be evenly divided by 100, it is NOT a leap year, unless; The year is also evenly divisible by 400. Then it is a leap year.