
var Letter = function(character) {

		this.character = character;
		this.letterRight = false;
		this.showLetter = function(){
				if (this.letterRight = true) {

					return this.character;
				}

				else {

					return ("_");
				}
		};
		this.characterGuessed = function(guess){
				if (guess == this.character) {

					this.letterRight = true;
					return this.letterRight;
				}

		};

};

module.exports = Letter;
