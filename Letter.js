var Letter = function(char){
	this.show = !/[a-z1-9]/i.test(char);
	this.char = char;
};

Letter.prototype.toString = function(){
	if (this.show === true){
		return this.char;
	}
	return "_";
};


Letter.prototype.getSolution = function(){
	return this.char;
};

Letter.prototype.guess = function(charGuess){
	if(charGuess.toUpperCase() === this.char.toUpperCase()){
		this.show = true;
		return true;
	}
	return false;
};


module.exports = Letter;

