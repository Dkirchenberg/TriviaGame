var score =0;
var targetDiv= 


alert ("Are You Ready To Play?")

setTimeout(thirtySeconds, 1000*30);
setTimeout(fifteenSeconds, 1000*15);
setTimeout(fiveSeconds, 1000*5);

function thirtySeconds () {
    $("#timer").append("<h2>About 5 seconds left!</h2>");

}

function fifteenSeconds () {
    $("#timer").append("<h2>About 15 seconds left!</h2>");

}

function fiveSeconds () {
    $("#timer").append("<h2>About 30 seconds left!</h2>");

}

       
        $("#button-1a").on("click", function() {
            console.log('clicked');
        alert("incorrect-Tallahassee");

   });


        $("#button-1b").on("click", function() {
            alert("correct!");

    });

        $("#button-2a").on("click", function() {
        alert("correct!");

    });


        $("#button-2b").on("click", function() {
        alert("incorrect!");

    });

        $("#button-3a").on("click", function() {
        alert("correct!");

    });


        $("#button-3b").on("click", function() {
        alert("incorrect!");

    });

        $("#button-4a").on("click", function() {
        alert("incorrect- the Everglades");

    });


        $("#button-4b").on("click", function() {
        alert("correct!");

    });

    $("#button-5a").on("click", function() {
        alert("incorrect- Stuart");

    });


        $("#button-5b").on("click", function() {
        alert("correct!");

    });


