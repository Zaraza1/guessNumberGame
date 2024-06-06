// Set a number to guess
// let secretNumber = 5;
// Using random number
let secretNumber = Math.floor(Math.random() * 11); // Generates a random number between 0 and 10
let attempts = 3; // Number of attempts allowed

// Select the input number element
let inputNumber = document.getElementById("input-number");

// Select the button element
let btnGuess = document.getElementById("btn-guess");

// Create a new paragraph element to display messages
let display = document.createElement("p");

// Select the div element with id "container"
let container = document.getElementById("container");

// Append the display element to the container element
container.appendChild(display);

// Add event listener to the guess button
btnGuess.addEventListener("click", () => {
  let message = ""; // Variable to store the message to be displayed

  // Check if there are attempts remaining
  if (attempts > 0) {
    // Check if the guessed number matches the secret number
    if (secretNumber === inputNumber.value) {
      message = "You guessed the number!";
    } else if (secretNumber > inputNumber.value) {
      // If guessed number is lower than the secret number
      message = "Too low!";
      attempts--; // Decrement attempts
    } else {
      // If guessed number is higher than the secret number
      message = "Too high!";
      attempts--; // Decrement attempts
    }
  } else {
    // If no attempts remaining
    message = "You lost! HAHAHAHA!";
  }

  // Update the display element with the message
  display.textContent = message;
});
