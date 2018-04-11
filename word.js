 // imports the Letter Constructor
 var Letter = require("./letter");

// Word constructor function
 var Word = function(letters) {
 	// Identifies letters/stores letters of word
 	this.letters = letters;
 	// returns the word, per the showLetter function of the Constructor Letter in a stored variable called "string"
 	this.showLetters = function(letters) {

 			var stringLetter = "";
 			// goes thru each character of the word
 			for (var x=0; x < this.letters.length; x++) {

 					stringLetter += this.letters[x].showCharacter() + " ";
 			}
 			// Displays the word
 			return console.log(stringLetter);
 
 	};
 	// Runs through the charactersGuessed function from Letter constructor
 	this.lettersGuess = function(guess) {

 			// runs through the lenth of the word
 			for (var x=0; x < this.letters.length; x++) {

 					this.letters[x].characterGuessed(guess);
 			}
 	};

 };

// Exports the Word Constructor
 module.exports = Word;