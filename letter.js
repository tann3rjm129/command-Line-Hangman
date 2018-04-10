
// Letter Constructor
var Letter = function(character) {
	// Identifies the character in question
		this.character = character;
	// To determine if a character has been guessed
		this.characterRight = false;
	// If a character is guessed, then you return the character guessed or "_" if not guessed
		this.showCharacter = function() {
				if (this.characterRight = true) {

					return this.character;
				}

				else {

					return "_";
				}
		};
	// stores character guess as an argument, alters the letterRight to true in order to display the charaacter guessed
		this.characterGuessed = function(guess){
				if (guess == this.character) {

					this.characterRight = true;
					return this.characterRight;

				}
// change here?
				
		};

};

// exports Letter constructor
module.exports = Letter;
