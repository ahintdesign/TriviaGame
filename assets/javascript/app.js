$('#start').on('click', function() {
    $('#start').remove();
    game.loadQuestion();

});

$(document).on('click','.answer-button', function(e){

    game.clicked(e);
})

$(document).on('click', '#reset', function() {
    game.reset();
})

var images = ["assets/images/the_bodyguard.jpg", "assets/images/the_bodyguard.jpg", 
"assets/images/the_bodyguard.jpg", "assets/images/the_bodyguard.jpg", 
"assets/images/the_bodyguard.jpg", "assets/images/the_bodyguard.jpg", 
"assets/images/the_bodyguard.jpg", "assets/images/the_bodyguard.jpg", 
"assets/images/the_bodyguard.jpg", "assets/images/the_bodyguard.jpg",]

var questions = [{

      
        question: "Released in 1992, what is the best selling soundtrack album of all time?",
        options: ["Boogie Nights", "Purple Rain", "The Bodyguard", "Saturday Night Fever"],
        answer:"The Bodyguard",

    },
    {
        
        question: "Award winning Latina pop artist Shakira was born in raised in what country?",
        options: ["Brazil", "Colombia", "Argentina", "Bolivia"],
        answer: "Colombia"
    },


    {
        
        question: "'Walk This Way' was sung by who?",
        options: ["Bon Jovi", "Guns N' Roses", "Van Halen", "Aerosmith"],
        answer: "Aerosmith"
    },


    {
        question: "What was the highest selling album of the 1980s in the United States?",
        options: ["The Beatles - The Beatles", "Elton John - Greatest Hits", "Whitney Houston - The Bodyguard", "Michael Jackson - Thriller"],
        answer: "Michael Jackson - Thriller"
    },

     {
        question: "What was Jimi Hendrix's real name?",
        options: ["Jim Marshall Hendrix", "James Maurice Hendrix", "James Marshall Hendrix", "John Maurice Hendrix"],
        answer: "James Marshall Hendrix"
    },


 {
        question: "New Orleans is known as the birthplace of what type of music?",
        options: ["Blues", "Reggae", "Jazz", "Soul"],
        answer: "Jazz"
    },


 {
        question: "Which pop star sang the national anthem at the 50th Super Bowl?",
        options: ["Lady Gaga", "Beyonce", "Kelly Clarkson", "Bruno Mars"],
        answer: "Lady Gaga"
    },

    {
        question: "Which music group has received the most Grammy Awards?",
        options: ["THe Beatles", "Cold Play", "Maroon 5", "U2"],
        answer: "U2"
    },


{
        question: "What famous female singer died of alcohol poisoning in 2011 at the age of 27?",
        options: ["Joss Stone", "Amy Winehouse", "Selena", "Aaliyah"],
        answer: "Amy Winehouse"
    },


{
        question: "Which one of Prince's songs reached highest on the music charts?",
        options: ["Purple Rain", "When Doves Cry", "Kiss", "I Would Die 4 U"],
        answer: "When Doves Cry"
    }


];


var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 20,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time Up!");
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h4>Time Remaining <span id='counter'>20</span> Seconds </h4>");
    
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].options.length; i++) {
             
            $('#subwrapper').append('<button class="answer-button" id="button- ' +i+'" data-name="' 
                + questions[game.currentQuestion].options[i] + '">' 
                + questions[game.currentQuestion].options[i] + '</button>');

        }



    },

    nextQuestion: function() {
        game.counter = 20;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>Oh no! You are out of time!</h2>');
        $('#subwrapper').append('<h3>The Correct Answer Was: '
            +questions[game.currentQuestion].answer+ '</h3>');
        if(game.currentQuestion == questions.length-1) {
            setTimeout(game.results, 2*1000);
        } else {
            setTimeout(game.nextQuestion, 2*1000);
        }

    },

    results: function() {
        clearInterval(timer);
        $('#subwrapper').html("<h2>Correct: "+game.correct+"</h3>");
        $('#subwrapper').append("<h2>Incorrect: "+game.incorrect+"</h3>");
        $('#subwrapper').append("<h2>Unanswered: "+game.unanswered+"</h3>");
        $('#subwrapper').append("<button id='reset'>PLAY AGAIN</button>")
       

    },

    clicked: function(e) {
            clearInterval(timer);
            if($(e.target).data("name")==questions[game.currentQuestion].answer) {
                game.right();
            } else {
                game.wrong();
            }
           },

    right: function() {
        console.log("Nice job! You're right!");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2>Nice job! You are right!</h2>');
        if(game.currentQuestion == questions.length-1){
            setTimeout(game.results, 2*1000);
        } else {
            setTimeout(game.nextQuestion, 2*1000);
        }

    },

    wrong: function() {
        console.log("Sorry! That's incorrect.")
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2>Sorry! That is incorrect.</h2>');
        $('#subwrapper').append('<h3>The Correct Answer Was: '
            +questions[game.currentQuestion].answer+ '</h3>');
        if(game.currentQuestion == questions.length-1){
            setTimeout(game.results, 2*1000);
        } else {
            setTimeout(game.nextQuestion, 2*1000);
        }

    },

    reset: function() {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered =0;
        game.loadQuestion();

    },

}