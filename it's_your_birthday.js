function sayBirthday(day, month) {

	if(day === 6 && month === 11 || day === 11 && month === 6) {
		console.log("How did you know?");
		return;
	}

	console.log("Just another day...");
	return;
}

sayBirthday(11, 6);