    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var arr = [];
    var x = document.getElementById("myImg");

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        arr.push(userGuess);
        guesses--;

                if (userGuess == computerGuess) {
                    wins++; guesses = 9;
                    computerGuess = letters[Math.floor(Math.random() * letters.length)];
                    arr = [];
                }

                if (guesses == 0) {
                    losses++; guesses = 9;
                    computerGuess = letters[Math.floor(Math.random() * letters.length)];
                    arr = [];
                }

    var html = "<h2> Guess what letter I am thinking of </h2>" +
                "<h2> wins: " + wins + "</h2>" +
                "<h2> losses: " + losses + "</h2>" +
                "<h2> guesses left: " + guesses + "</h2>" +
                "<h2> Your guesses so far: " + arr + "</h2>";


    document.querySelector('#game').innerHTML = html;
}