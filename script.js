'use strict'

// computer make up random number 1-100

let randomNumber = Math.floor(Math.random()*100)+1;

let userGuess;

/*Use binary search (Firstly find the middle of numbers.
You'll get an alert with a random number less or higher than the user's guess. Then repeat this algorithm until you find the correct number) */

while(userGuess !== randomNumber) {

   const userInput = prompt('Try to guess the number between 1 and 100:')

   userGuess = Number(userInput);

   if (userInput === null) {
      break
   }

   if (userGuess > randomNumber) {
      alert('Too high. Try again!')
   } else if(userGuess < randomNumber) {
      alert('Too low. Try again!')
   } 
}

if(userGuess === randomNumber) {
   alert('Congratulations! You guessed the correct number!');
}

