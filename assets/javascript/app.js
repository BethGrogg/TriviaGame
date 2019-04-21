var questionArray = [{
    question: "Which of the actors on Friends unfortunately decides to whiten his teeth before going out on a first date with a girl he's had a crush on for some time?",
    answer: ["Chandler", "Joey", "Ross", "Gunther"],
    correct: "2",
    image: ("assets/images/tenor.gif")
},
{
    question: "Who was Ross's second wife?",
    answer: ["Rachel", "Phoebe", "Jennifer", "Emily"],
    correct: "3",
    image: ("assets/images/emily.gif")
},
{
    question: "Who plays Chandler?",
    answer: ["Matt LeBlanc", "David Schwimmer", "Joshua Jackson", "Matthew Perry"],
    correct: "3",
    image: ("assets/images/matthew_perry.gif")
}
];

var questionIndex = 0;
var question = questionArray[questionIndex].question;

$(document).ready(function() {
$(".question").text(question);
$("#answer1").text(questionArray[questionIndex].answer[0]);
$("#answer2").text(questionArray[questionIndex].answer[1]);
$("#answer3").text(questionArray[questionIndex].answer[2]);
$("#answer4").text(questionArray[questionIndex].answer[3]);
});