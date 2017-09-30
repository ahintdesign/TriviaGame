$("#start").on('click', function(){
    for(var i=0;i<triviaQuestions.length; i++) {
    $("#subwrapper").append('<h2>' + triviaQuestions[i].question + '</h2>');
        for (j=0; j<triviaQuestions.options.length; j++) {
        $("#subwrapper").append("<input type='radio' name='question: "+i+"' value='"+triviaQuestions[i].options[j]+"'>" + triviaQuestions[i].options[j]);
    }

 }
   
});

var triviaQuestions = [{

    question: "Released in 1992, what is the best selling soundtrack album of all time?",
    options: ["Boogie Nights", "Purple Rain" , "The Bodyguard", "Saturday Night Fever"],
    answer: "The Bodyguard"
},
    {
    question: "Award winning Latina pop artist Shakira was born in raised in what country?",
    options: ["Brazil", "Colombia" , "Argentina", "Bolivia"],
    answer: "Colombia"
},

    {
    question: "What was the highest selling album of the 1980s in the United States?",
    options: ["The Beatles - The Beatles", "Elton John - Greatest Hits" , "Whitney Houston - The Bodyguard", "Michael Jackson - Thriller"],
    answer: "Michael Jackson - Thriller"
}];







