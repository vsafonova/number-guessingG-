'use strict'

// Infinte loop for playing again
mainLoop: while (true) {
   let guesses = 7; // Variable for amoun of guesses left
   let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1-100
   let userGuess;

   // Loop while still have guesses left
   while (guesses > 0) {
      alert(`You have ${guesses} left`);

    // Get user's guess
      const userInput = prompt('Try to guess the number between 1 and 100:');
      userGuess = Number(userInput);

      if (userInput === null) {
         break mainLoop;
      } 

      if(!isNaN(userGuess)) {
         if (userGuess === randomNumber) {
            alert('Congratulations! You guessed the correct number!');
            break;
         } else if (userGuess < randomNumber) {
            alert('Too low. Try again!');
         } else if (userGuess > randomNumber) {
            alert('Too high. Try again!');
         }
         guesses -= 1;
      } else {
         alert('Please enter a valid number.');
      }
   }
   
      let answer = confirm('Play again?');

   // If press cancel break out of loop
      if (answer === false) {
         break;
      }
}