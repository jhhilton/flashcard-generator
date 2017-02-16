var fs 					= require('fs');
var inquirer 			= require("inquirer");
var BasicCard			= require("./basicflashcard");
var ClozeCard 			= require('./clozeflashcard')

var questionPrompts = [{
	type: "input",
	name: "question",
	message: "What question do you want on this flashcard?"
}, {
	type: "input",
	name: "answer",
	message: "What is the question's answer?"
}]

var appendQuestion = function(questions){
	var newQuestion = BasicCard(questions.question, questions.answer);
}