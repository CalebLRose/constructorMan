var Letter = require("./Letter.js");

var Word = function(word){
	this.letters = word.split("").map(function(char){
		return new Letter(char);
	});
};

Word.prototype.getSolution = function(){
	return this.letters.map(function(letter){
		return letter.getSolution();
	}).join('');
};

Word.prototype.toString = function(){
	return this.letters.join(' ');
};

Word.prototype.guessLtr = function(char){
	var checkLetr = false;
	this.letters.forEach(function(letr){
		if (letr.guess(char)){
			checkLetr = true;
		}
	});
	console.log("\n"+this+"\n");
	return checkLetr;
};

Word.prototype.correctGuess = function(){
	return this.letters.every(function(letter){
		return letter.show;
	});
};



module.exports = Word;
