
// Set the count
var count = 90;
var num = 0;

// Update the count down every 1 second
var x = setInterval(function() {

  $("#timer").html(count-- + "s");

 }, 1000);

//Quiz questions

var triviaQuestions {
	1. {
		"question": "Which animal is the largest member of the cat family?"
		"choices": {
			1: "Lion", 
			2: "Tiger",
			3: "Cheetah",
			4: "Jaguar"
		}
		"answer": 2,
	},

	2. {
		"question": "What land animal can live the longest... between 100 and 180 years?"
		"choices": {
			1: "Rabbit", 
			2: "Guinea Pig",
			3: "Gold Fish",
			4: "Tortoise",
		}
		"answer": 4,
	},


}


var loadQuestion = function() {   
    $('#text').html(trivaQuestions[num]["question"]);
    $('#question1').html(trivaQuestions[num]["choices"][1]);
    $('#question2').html(trivaQuestions[num]["choices"][2]);
 
};

loadQuestion ();












 //function setInterval (function1 ({}), 1000)
 //var setinterval = setInterval (function1 ({}), 1000)

   // If the count down is finished, write some text 
  /*if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }*/
 //$("#example").html("<input type='radio'>");
