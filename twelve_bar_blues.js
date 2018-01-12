function twelveBarBlues() {
	for (i = 0; i < 48; i++) {
		if(i % 4 == 0) {
			console.log((i / 4) + 1);
		} 
		else if(i % 2 ==0) {
			console.log("BOOM");
		}
		else {
			console.log("CHICK");
		}
	}
}

twelveBarBlues();