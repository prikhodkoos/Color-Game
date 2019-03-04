var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var newButton = document.getElementById("new-game");
var colorText = document.querySelector(".color");
var head = document.querySelector("header");
var message = document.getElementById("turn");
var isEasy = false;
var squares;
var colors;
var correctSquare;

function newGame() {
    reset();
    // display correct amount of squares  
    var hards = document.getElementsByClassName("hard");
    for (let i = 0; i < hards.length; i++) {
        if (isEasy) {
            hards[i].classList.add("hidden");
            hards[i].classList.remove("in-game");
        }
        else {
            hards[i].classList.remove("hidden");
            hards[i].classList.add("in-game");
        }
    }
    squares = document.querySelectorAll(".game div.in-game");
    // create array of colors
    getColors();
    // draw squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // choose a correct color
    correctSquare = Math.floor(Math.random() * squares.length);
    colorText.textContent = colors[correctSquare];    
}

function getColors() {
    colors = [];
    for (let i = 0; i < squares.length; i++) {
        var r = Math.floor(Math.random() * 256);  
        var g = Math.floor(Math.random() * 256);  
        var b = Math.floor(Math.random() * 256);  
        colors.push(`rgb(${r}, ${g}, ${b})`);        
    }
}

function reset() {
    document.querySelector(".game").classList.remove("unclickable");
    head.style.backgroundColor = "#5F7BD4";
    newButton.textContent = "new game";
    message.textContent = "";
}

newGame();
// setup squares
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (i === correctSquare) {
            newButton.textContent = "Play Again?";
            head.style.backgroundColor = colors[i];
            for (let j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = colors[i];
            }
            document.querySelector(".game").classList.add("unclickable");
            message.textContent = "great!!!";

        } 
        else {
            this.style.backgroundColor = "transparent";
            message.textContent = "try again :(";
        } 
    });
}

easyButton.addEventListener("click", function() {
    isEasy = true;
    this.classList.add("selected");
    hardButton.classList.remove("selected");

    newGame();
});

hardButton.addEventListener("click", function() {
    isEasy = false;
    this.classList.add("selected");
    easyButton.classList.remove("selected");

    newGame();
});

newButton.addEventListener("click",newGame);