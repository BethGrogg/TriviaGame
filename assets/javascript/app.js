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
},
{
    question: "When Rachel, Chandler and Ross are trying to carry Ross's new lounge up a flight of stairs that change direction half way, what is the word that Ross keeps shouting out to the other two?",
    answer: ["Turn!", "Pivot!", "Lean!", "Slide!"],
    correct: "1",
    image: ("assets/images/pivot.gif")
},
{
    question: "Who walked Carol down the aisle when she married Susan?",
    answer: ["Bob", "Chandler", "Tony", "Ross"],
    correct: "1",
    image: ("assets/images/carol_wedding.gif")
},
{
    question: "Who was Rachel going to marry but left at the altar?",
    answer: ["Barry", "Gary", "Ross", "Joe"],
    correct: "0",
    image: ("assets/images/rachel_wedding.gif")
},
{
    question: "Who was Chandler's annoying ex-girlfriend?",
    answer: ["Janine", "Jackie", "Janice", "Jennifer"],
    correct: "2",
    image: ("assets/images/janice.gif")
},
{
    question: "What is the name of Ross's son?",
    answer: ["Liam", "Luke", "Michael", "Ben"],
    correct: "3",
    image: ("assets/images/ben.gif")
},
{
    question: "What was the name of the character Joey played on Days of Our Lives?",
    answer: ["Dr. Bob Beauregard", "Dr. Drake Ramoray", "Dr.Richard Richie", "Dr. Robert Robertson"],
    correct: "1",
    image: ("assets/images/drake.gif")
},
{
    question: "What did Monica make when she was trying to get over Richard?",
    answer: ["Spaghetti Sauce", "Cupcakes", "Jam", "Bread"],
    correct: "1",
    image: ("assets/images/jam2.gif")
}
];

var questionIndex = 0;
//var question = questionArray[questionIndex].question;
var clockRunning = false;
var time=10;
//set to true if user chooses a response so that time is stopped
var answered = false;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;

function questionSetUp() {
    $(".question").text(questionArray[questionIndex].question);
    $("#0").text(questionArray[questionIndex].answer[0]);
    $("#1").text(questionArray[questionIndex].answer[1]);
    $("#2").text(questionArray[questionIndex].answer[2]);
    $("#3").text(questionArray[questionIndex].answer[3]);
    
}

$(document).ready(function() {
    questionSetUp();



if ($('.h4').click(function() {
    console.log(questionArray[questionIndex].correct);
    var id = $(this).attr('id');
    if (id === questionArray[questionIndex].correct) {
        
        correct();
    } else if (time===0){
        timedOut();
    }else {
        incorrect();
    };

    $('.image').append('<img class=answerImage width="200" height="200" src="' + questionArray[questionIndex].image + ' ">');
    
    clearInterval(intervalId);
    count();
}));

function start() {

    //  start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  
  }

  function correct() {
      $('#correct').text("You are correct!");
      correctAnswers++;
      
  }

  function incorrect() {
      $('#incorrect').text("Wrong Answer!");
     incorrectAnswers++;
  }

  function timedOut() {
      $('#timesup').text("Time's Up!");
      
  }

  function finalScreen() {
      $('#numberCorrect').text(correctAnswers);
      $('numberIncorrect').text(incorrectAnswers);

  }

  function count() {
    if (time === 0) {
        time=20;
        questionIndex++;
        questionSetUp();
    } else {
       
        //decrement time by 1
    time--; 
       
        }
        $("#time").text("Time Remaining: "+time);
    }
   

  


  
  

  start();

});