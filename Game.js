var inquirer = require("inquirer");
var Word = require("./Word");
var list = require("./list")
// broke-y no work-y
// var randomMovie = require("random-movie");

// node package didn't work
// randomMovie(function(err,data){
// 	console.log(data);
// });

function Hangman(){
	var self = this;
	this.start = function(){
		this.guessLeft = 10;
		this.wordChoice();
	};
	this.wordChoice = function(){
		var randWrd = list[Math.floor(Math.random()*list.length)];
		this.chosenWrd = new Word(randWrd);
		console.log("\n"+this.chosenWrd+"\n");
		this.userGuess();
	};
	this.userGuess = function(){
		this.promptInput().then(function(){
			if(self.guessLeft < 1){
				console.log(":( No more guesses! The answer was "+self.chosenWrd.getSolution()+"\n");
				self.tryAgain();
			} else if (self.chosenWrd.correctGuess()){
				console.log("Correct! Keep it up.");
				self.guessLeft = 10;
				self.wordChoice();
			} else {
				self.userGuess();
			}
		});
	};
	this.tryAgain = function(){
		inquirer
			.prompt([
				{
					type: "confirm",
					name: "choice",
					message: "Try Again?"
				}
			])
			.then(function(val){
				if(val.choice) {
					self.start();
				} else {
					self.stop();
				}
			});
	};
	this.promptInput = function(){
		return inquirer
		.prompt([
			{
				type: "input",
				name: "choice",
				message: "Pick a Letter",
				validate: function(val){
					return /[a-z1-9]/gi.test(val);
				}
			}
		])
		.then(function(val){
			var input = self.chosenWrd.guessLtr(val.choice);
			if (input){
				console.log("\n--------------------\n");
				console.log("That is correct!");
				console.log("\n--------------------\n");
			} else {
				self.guessLeft--;
				console.log("\n--------------------\n");
				console.log("Umm no... guess again.");
				console.log("Chances left: "+self.guessLeft);
				console.log("\n--------------------\n");
			}
		});
	};
	this.stop = function(){
		console.log("\n--------------------\n");
		console.log("Bye bye now");
		console.log("\n--------------------\n");
		process.exit(0);
	};
};

module.exports = Hangman;
