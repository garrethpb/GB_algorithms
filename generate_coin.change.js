
function generateCoinChange(cents) {
	var quarters = Math.floor(cents / 25);
	var remainder = cents % 25;
	console.log("The change is: " + quarters + " quarter(s)." + "There are now " + remainder + " cents remaining.");

	var dimes = Math.floor(remainder / 10);
	var remainder = remainder % 10;
	console.log("The change is: " + dimes + " dime(s)." + "There are now " + remainder + " cents remaining");

	var nickels = Math.floor(remainder / 5);
	var remainder = remainder % 5;
	console.log("The change is: " + nickels + " nickel(s)." + "There are now " + remainder + " cents remaining.");

	var pennies = Math.floor(remainder / 1);
	console.log("The chanage is: " + pennies + " pennies.");

	}

generateCoinChange(94);





// Challenge: Create a function that accepts a number of cents and outputs how best to represent that amount of money in smallest number of coins (quarters, dimes, nickels, pennies).

// Example:
// 94 cents can be represented as:
// 	quarters: 3
// 	dimes: 1
// 	nickels: 1
// 	pennies: 4 -->

// <!-- Pseudo-code:
// 1. Quarters. Divide argument (94 cents) by 25. Store quotient (3) and remainder (19). Print: Quarters: 3, 19 cents left.
// 2. Dimes. Divide remainder (19) by 10. Store quotient (1) and remainder (9). Print: Dimes: 1, 9 cents left.
// 3. Nickels. Divide remainder (9) by 5. Store quotient (1) and remainder (4). Print: Nickels: 1, 4 cents left.
// 4. Pennies. Divide remainder (4) by 1. Store quotient (4). Print: Pennies: 4. Print: 4 pennies, 0 cents left.
// 5. End program. 