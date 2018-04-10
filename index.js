
var Word = require("./Word");
var Letter = require("./Letter");

var inquirer = require("inquirer");

var words = ["squanchy", "unity", "birdperson", "picklerick", "shwifty", "councilofricks", "portalgun", "summer", "morty", "szechuansauce", "wubalubadubdub", "jerry"];
var randomWord = words[Math.floor(Math.random() * words.length)];

var lettersarray = [];
var guessesLeft = 12; 

function startup() {

	console.log("welcome to Rick and Morty Hangman 2.0 : Inquirer EDITION");

	for (var x=0, x < randomWord.length; x++) {

		lettersarray.push(new Letter(randomWord.charAt(x)));
	}

	var activeWord = new Word(lettersarray);


	if (guessesLeft > 0) {

			var wordShow = activeWord.showLetters();

			console.log("You got "+ guessesLeft + " guesses left BROH!");

			inquirer.prompt([
							{
								message: "Guess a letter BROH!",
								type: input,
								name: "Guess question"
							}
				]).then(function(input)) {


			}

	}


}