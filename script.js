"use strict";

let randomNumber;
let guessesCounter; // Variable for amount of guesses left

let guessButtonEl = document.querySelector("#form");
guessButtonEl.addEventListener("submit", guess);

let cancelButtonEl = document.querySelector("#cancel");
cancelButtonEl.addEventListener("click", resetGame);

let playAgainButtonEl = document.querySelector("#playagain");
playAgainButtonEl.addEventListener("click", resetGame);

let gameFieldEl = document.querySelector("#gamefield");
const imageEl = document.getElementById("image");
const instructionsEl = document.querySelector("#instructions");
const congratsEl = document.querySelector("#congratulations");

resetGame(); //Initialize game

//Generate random number between 1-100
function setRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}

//Compare value with random number
function checkGuess(userGuess) {
  if (userGuess === randomNumber) {
    win();
    return true;
  } else if (userGuess < randomNumber) {
    alert("Too low. Try again!");
    return false;
  } else if (userGuess > randomNumber) {
    alert("Too high. Try again!");
    return false;
  }
}

//When your tries are finished - finish the game
function loss() {
  imageEl.src = "https://media.giphy.com/media/qtgkm1xVilBFWD63CT/giphy.gif";
  endGame();
}

//Get value from input
function guess(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get the form data using FormData
  const formData = new FormData(event.target);

  // You can now access and process the form data as needed
  const value = Number(formData.get("userGuess"));

  let inputEl = document.querySelector("#userGuess");

  inputEl.value = ""; //reset input after entering a number

  decreaseCounter();
  let isCorrectGuess = checkGuess(value);

  if (guessesCounter <= 0 && !isCorrectGuess) {
    loss();
  }
}

//Show many tries you have
function showCounter() {
  let countLeftTries = document.querySelector("#tries");
  countLeftTries.innerText = `You have ${guessesCounter} tries`;
}

//Decrease number of tries remaining
function decreaseCounter() {
  setGuesses(guessesCounter - 1);
}

// After click on "cancel" abort the game even if I still have tries
function resetGame() {
  setRandomNumber();
  setGuesses(7);

  playAgainButtonEl.style.display = "none";
  gameFieldEl.style.display = "flex";
  imageEl.src = "./images/image.jpg";
  instructionsEl.style.display = "flex";
  congratsEl.style.display = "none";
}

//Set counter of tries
function setGuesses(guesses) {
  if (guesses >= 0) {
    guessesCounter = guesses;
    showCounter();
  }
}

//What is happening if you won
function win() {
  imageEl.src = "https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif";
  endGame();
  congratsEl.style.display = "block";
}

//What is happening when you won or loss
function endGame() {
  playAgainButtonEl.style.display = "block";
  gameFieldEl.style.display = "none";
  instructionsEl.style.display = "none";
}
