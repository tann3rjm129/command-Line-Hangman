
// Letter Constructor
var Letter = function(character) {
	// Identifies the character in question
		this.character = character;
	// To determine if the character has been guessed
		this.letterRight = false;
	// If a character is guessed, then you return the character guessed or "_" if not guessed
		this.showLetter = function(){
				if (this.letterRight = true) {

					return this.character;
				}

				else {

					return ("_");
				}
		};
	// stores character guess as an argument, alters the letterRight to true in order to display the charaacter guessed
		this.characterGuessed = function(guess){
				if (guess == this.character) {

					this.letterRight = true;
					return this.letterRight;
				}

		};

};

// exports Letter constructor
module.exports = Letter;
