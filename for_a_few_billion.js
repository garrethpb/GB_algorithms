var startPay = .01;
var total = 0;
for (var day = 1; day <= 30; day++) {
	console.log("Today is day: " + day);
	startPay = startPay + startPay;

	console.log("Today I got paid: $" + startPay);
	total = total + startPay;

	// console.log("My total pay so far is: $" + total);
}

console.log("****My total pay is: $" + total + "! WOWZA!!!!");