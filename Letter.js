var Letter = function(letter){
	this.letter = letter;
	this.show = false;
	this.render = function(){
		if (this.letter == " "){
			return " ";
		}else if (this.show){
			return this.letter;
		} else {
			return "_";
		};
	};
};


module.exports(Letter);

