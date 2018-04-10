 // imports the Letter Constructor
 var Letter = require("./Letter");

// Word constructor function
 var Word = function(letters) {
 	// Identifies letters/stores letters of word
 	this.letters = letters;
 	// returns the word, per the showLetter function of the Constructor Letter in a stored variable called "string"
 	this.showLetters = function() {

 			var string = "";
 			// For loop illustrates the length of the word, goes thru each character of the word
 			for (var x=0; x < this.letters.length; x++) {
 					
 					string += this.letters[x].showLetter() + " ";
 			}
 			// Displays the word
 			return console.log(string);
 	};
 	// Runs through the charactersGuessed function from Letter, to display your character guessed
 	this.lettersGuess = function(guess) {

 			// runs through the lenth of the word
 			for (var x=0; x < this.letters.length; x++) {

 					this.letters[x].characterGuessed(guess);
 			}
 	};

 };

// Exports the Word Constructor
 module.exports = Word;