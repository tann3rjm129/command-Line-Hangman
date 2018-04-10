
var Word = require("./word");
var Letter = require("./letter");
// importing other contructors

// importing inquirer
var inquirer = require("inquirer");

// using same word bank as previous Hangman Game
var words = ["squanchy", "unity", "birdperson", "picklerick", "shwifty", "councilofricks", "portalgun", "summer", "morty", "szechuansauce", "wubalubadubdub", "jerry"];
// stores a randomword from the wordbank in a variable
var randomWord = words[Math.floor(Math.random() * words.length)];

// Letters stored in an array variable
var lettersArray = [];

// stores the guessed letters in an array
var letterGuessesArray = [];
// Amount of guesses left
var guessesLeft = 12; 
var score = 0;


// inquirer Startup function
function startup() {

	console.log("\n------------------\n");
	console.log("welcome to Rick and Morty Hangman 2.0 : Inquirer EDITION");
	console.log("\n------------------\n");
	console.log("Guess the word to score a point!");
	console.log("\n------------------\n");

	inquirer.prompt([
							{
								message: "Would you like to play?",
								type: "list",
								choices: ["yes", "no"],
								name: "start"
							}

				]).then(function(response) {

				var gameStart = response.start;

				if ( gameStart == "yes") {

					console.log("\n------------------\n");
					console.log("HERE WE GO BROH!")
					console.log("\n------------------\n");
					game();

				}

				else {

					console.log("Well come back when you're ready to play! LATER BROH!");
				}
			});

};

startup();


// goes thru each character of the random word runs it thru the letter constructor and pushes it to the letterArray
for (var x=0; x < randomWord.length; x++) {

		lettersArray.push(new Letter(randomWord.charAt(x)));
	}
// Current word to guess, the characters in the lettersArray are ran thru the word constructor
var activeWord = new Word(lettersArray);

// Actual game function

function game() {

	if (guessesLeft > 0) {

			// shows full word on screen?
			var wordToGuess = activeWord.showLetters();
	
			console.log("You got "+ guessesLeft + " guesses left BROH!");

			console.log("\n------------------\n");



			inquirer.prompt([
							{
								message: "Guess a letter BROH!",
								type: "input",
								name: "guess"
						
      						}
				]).then(function(response) {

							var commandLineGuess = response.guess.toLowerCase();

							var alreadyGuessed = false;

							for (var x=0; x < letterGuessesArray.length; x++) {
								if (commandLineGuess === letterGuessesArray[x]) {

									alreadyGuessed = true;
									break;

								}

							};

					if (alreadyGuessed = true) {

						console.log("You guessed this letter already BROH!");

					}

					else if (activeWord.lettersGuess() = true) {

						console.log("\n------------------\n");
						console.log("You guessed the word BROH!");
						score++;
						console.log("You earned a point!");
						console.log("Score: "+ score);
						console.log("\n------------------\n");
						return;
					}

					else {

						guessesLeft--;
						letterGuessesArray.push(commandLineGuess);
						activeWord.CharacterGuessed(commandLineGuess);

					}

					game();

					});


			}

	else {

		console.log("Sorry BROH, you used up all your guesses!");
	}


};

