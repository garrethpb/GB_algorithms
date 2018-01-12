function letterGrade(grade) {

	if (grade < 60) {
		letter = "F";
	}

	else if (grade > 59 && grade < 70) {
		letter = "D";
	}

	else if (grade > 69 && grade < 80) {
		letter = "C";
	}

	else if (grade > 79 && grade < 90) {
		letter = "B";
	}

	else if (grade > 89) {
		letter = "A";
	}

console.log("Score: " + grade + ". " + "Letter grade: " + letter + ".");

}

console.log(letterGrade(85));


// Challenge: Create a function that accepts a grade as a parameter and returns a string that tracks the student's score and letter grade. The function should print a sentence like the following: "Score: 85. Letter grade: B.".