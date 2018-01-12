function randomChance(numQuarters) {
	for(var i = 0; i < numQuarters; i++){
		if(Math.floor(Math.random() * 100) === 25) {
			console.log("You win!");
			var winnings = getRandomInt(50, 101);
			var remainingQuarters = numQuarters - i - 1;
			var purse = winnings + remainingQuarters;
			console.log("winnings: " + winnings + " you spent: " + i + " quarters");
			return purse;
		}
	}
	
	console.log("You lose.");
	return 0;
}

function getRandomInt(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

console.log("Purse: " + randomChance(50));