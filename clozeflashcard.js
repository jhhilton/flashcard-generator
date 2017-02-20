var fs 					= require('fs');

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.PrintIt = function(){
	console.log("Text: " + this.text + "\nCloze: " + this.cloze + "\nAdded to the flashcard database!")
}

module.exports = ClozeCard;