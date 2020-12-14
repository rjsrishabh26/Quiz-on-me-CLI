var readlineSync = require('readline-sync');
var score = 0;
var highestScore = 3;
console.log("Hey! ");
//console.log("Please enter your name");
var name = readlineSync.question('What is your name? ');
console.log("Welcome to the quiz about Riahbh, lets see how much you know him "+ name + "! ");
console.log("The score cannot go below 0 and the answer will be excepted irrespective of what case it is in. Enjoy!")

function quiz(question, answer){
    var read = readlineSync.question(question);
		var input = read.toUpperCase();
		// console.log(input+ read)
    if (input === answer){
      console.log("Correct!");
      score++;
			console.log("You current score is " + score +"!")
    }
    else{
      console.log("Wrong!");
      score--;
			if(score>=0)
			console.log("Your current score is "+ score+ "!")
			else console.log("Your current score is 0!")
    } 
}

var data = [{
  question: "Whats my fav sport? ",
  answer: "BADMINTON"
},{
  question:"Where do I stay?",
  answer: "NAGPUR"
},{
  question: "Whats my favourite show?",
  answer:"HOW I MET YOUR MOTHER"
},{
	  question: "Whats my nick name at home",
  answer:"SIMER"
},{
	question:"Am I a cat peron or a dog person?",
	answer:"CAT"
}
];
console.log("....")
for (var i=0; i<data.length; i++) {
  if(i==3){
		console.log("That was easy part! Now its time for level two! Each correct answer has 2 marks")
	}
  quiz(data[i].question, data[i].answer)
}
if(score>highestScore){
  console.log("Congratulations! You have the highest score");
  highestScore = score;
}
else{
	if(score>=0)
  console.log("The highest score is " + highestScore +" and you scored " +score+ "!");
	else
	console.log("The highest score is " + highestScore +" and you scored 0. Better luck next time");
}