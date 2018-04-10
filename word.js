 
 var Letter = require("./Letter");

 var Word = function(letters) {

 	this.letters = letters;
 	this.showLetters = function() {

 			var string = "";
 			for (var x=0; x < this.letters.length; x++) {

 					string += this.letters[x].showLetter() + " ";
 			}

 			return console.log(string);
 	};
 	this.lettersGuess = function(guess) {

 			for (var x=0; x < this.letters.length; x++) {

 					this.letters[x].characterGuessed(guess);
 			}
 	};

 };

 module.exports = Word;