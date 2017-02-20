var fs 					= require('fs');
var inquirer 			= require("inquirer");
var BasicCard			= require("./basicflashcard");
var ClozeCard 			= require('./clozeflashcard');

var questionArray		= [];
var clozeArray			= [];
var type				= process.argv[2].toLowerCase();

switch (type){

case undefined:
console.log("Input either 'Basic' or 'Cloze' to continue making flash cards");
break;

case "basic":

var questionPrompts = [{
	type: "input",
	name: "question",
	message: "What question do you want on this flashcard?"
}, {
	type: "input",
	name: "answer",
	message: "What is the question's answer?"
}];

var appendQuestion = function(questions){
	var newQuestion = new BasicCard(questions.question, questions.answer);
	newQuestion.PrintIt();
	var newQuestionJSON = JSON.stringify(newQuestion);
	questionArray.push(newQuestionJSON);
	fs.appendFile('basicflashcard.txt', newQuestionJSON + "\n");
}

    var promptQuestion = function() {
        inquirer.prompt(questionPrompts)
            .then(appendQuestion)
    };

    promptQuestion();

break;

case "cloze":

var clozePrompts = [{
	type: "input",
	name: "text",
	message: "What is the full text of the statement you want to add to the flashcard?"
}, {
	type: "input",
	name: "cloze",
	message: "What portion of the statement do you want to hide?"
}];

var appendCloze = function(questions){
	var newCloze = new ClozeCard(questions.text, questions.cloze);
	newCloze.PrintIt();
	var newClozeJSON = JSON.stringify(newCloze);
	questionArray.push(newClozeJSON);
	fs.appendFile('clozeflashcard.txt', newClozeJSON + "\n");
}

    var promptCloze = function() {
        inquirer.prompt(clozePrompts)
            .then(appendCloze)
    };

    promptCloze();
    
break;


}