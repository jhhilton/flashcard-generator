var fs 					= require('fs');

function BasicCard(question, answer){
	this.question = question;
	this.answer = answer;
	
}

BasicCard.prototype.PrintIt = function(){
	console.log("Question: " + this.question + "\nAnswer: " + this.answer + "\nAdded to the flashcard database!")
}

module.exports = BasicCard;