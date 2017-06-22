var numberOfSquares = 6;
// var colors = [generateRandomColors(numberOfSquares)];
var colors = [];
// var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
    //mode buttons event listeners
    setUpModeButtons();
    setupSquares();
    reset();
    }

function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6;
            if(this.textContent === "EASY"){
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        // squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to pickedColor
            console.log(clickedColor, pickedColor); // ***** DEBUGGING *****
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
              this.style.background = "#232323";
              messageDisplay.textContent = "Try Again";
            }
        });
    }
}


// for (var i = 0; i < modeButtons.length; i++){
//     modeButtons[i].addEventListener("click", function(){
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
//         // this.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6;
//         if(this.textContent === "EASY"){
//             numberOfSquares = 3;
//         } else {
//             numberOfSquares = 6;
//         }
//         reset();
//         //figure out how many squares to show
//         //pick new colors
//         //pick a new pickedColor
//         //update page to reflect changes
//     });
// }

function reset() {
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}


// easyBtn.addEventListener("click", function(){
//     numberOfSquares = 3;
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     numberOfSquares = 6;
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
    // //generate all new colors
    // colors = generateRandomColors(numberOfSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // //change colorDisplay to match picked Color
    // colorDisplay.textContent = pickColor();
    // this.textContent = "New Colors";
    // //change color of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.background = colors[i];
    // }
    // h1.style.background = "steelblue";
    // messageDisplay.textContent = "";
});



function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
        squares[i].style.background = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //for red
    var r = Math.floor(Math.random() * 256);
    //for green
    var g = Math.floor(Math.random() * 256);
    //for blue
    var b = Math.floor(Math.random() * 256);
    // r + g + b
    return "rgb(" + r + ", " + g + ", " + b + ")";
}