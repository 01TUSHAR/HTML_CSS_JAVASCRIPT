
let minNumber = 1;
let maxNumber = 100;
let maxAttempts = 10;
let attempts = 0;
let targetNumber;
let guesses = [];
let hintsUsed = 1;

let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");

function checkGuess(guess) {
  attempts++;
  guesses.push(guess);
  showGuesses();

  if (guess === targetNumber) {
    return true;
  } else if (guess < targetNumber) {
    return `Try a higher number.`;
  } else {
    return `Try a lower number.`;
  }
}

function showGuesses() {
  const guessesContainer = document.getElementById("input-guess");
  let guessText = "Entered Number: ";
  for (let i = 0; i < guesses.length; i++) {
    guessText += guesses[i];
    if (i !== guesses.length - 1) {
      guessText += ", ";
    }
  }
  guessesContainer.textContent = guessText;
}

function showMessage(message) {
  document.querySelector(".message").textContent = message;
}

function restartGame() {
  minNumber = 1;
  maxNumber = 100;
  maxAttempts = 10;
  attempts = 0;
  targetNumber = null;
  guesses = [];
  hintsUsed = 1;

  document.getElementById("guess").value = "";
  document.querySelector(".message").textContent = "";
  document.getElementById("input-guess").textContent = "";

  displaycontainer1();
}

function updateChances() {
  const chancesElement = document.querySelector(".chances");
  const remainingAttempts = maxAttempts - attempts;
  chancesElement.textContent = `Gusses: ${remainingAttempts}`;
}

function play() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const levelSelect = document.getElementById("level-select");
  const selectedLevel = levelSelect.options[levelSelect.selectedIndex].value;
  switch (selectedLevel) {
    case "1":
      minNumber = 1;
      maxNumber = 50;
      maxAttempts = 10;
      break;
    case "2":
      minNumber = 1;
      maxNumber = 100;
      maxAttempts = 7;
      break;
    case "3":
      minNumber = 1;
      maxNumber = 100;
      maxAttempts = 5;
      break;
  }
  targetNumber = getRandomNumber(minNumber, maxNumber);
  console.log(targetNumber);
  displaycontainer2();
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

function provideHint() {
  if (hintsUsed > 0) {
    let hint;
    if (targetNumber % 2 === 0) {
      hint = "Even Number.";
    } else {
      hint = "Odd Number.";
    }
    if (isPrime(targetNumber)) {
      hint += " and Prime Number.";
    }
    showMessage(`Hint: ${hint}`);
    hintsUsed--;
  } else {
    showMessage("You've used all available hints.");
  }
}

function handleGuessSubmission() {
  const inputGuess = parseInt(document.getElementById("guess").value);
  const messageElement = document.querySelector(".message");

  if (isNaN(inputGuess) || inputGuess < minNumber || inputGuess > maxNumber) {
    showMessage(
      `Enter a valid number between ${minNumber} and ${maxNumber}. `,
      "black"
    );
    document.getElementById("guess").value = "";
    return;
  }

  const result = checkGuess(inputGuess);
  if (result === true) {
    displaycontainer3();
    showResult(
      `<h1>Congratulations!!</h1><h2>You won in ${attempts} chances.</h2><h2>Guessed Number: ${targetNumber}.`,
      "black"
    );
  } else if (attempts >= maxAttempts) {
    displaycontainer3();
    showResult(
      `<h1>Sorry!!</h1><h2>Out of chances<h2><h2>Number : ${targetNumber}.`,
      "black"
    );
  } else {
    document.getElementById("guess").value = "";
    messageElement.style.color = inputGuess < targetNumber ? "red" : "green";
    showMessage(result);
    updateChances();
  }
}

function showMessage(message, color) {
  const messageElement = document.querySelector(".message");
  messageElement.textContent = message;
  messageElement.style.color = color;
}

function showResult(message, color) {
  const resultElement = document.querySelector(".result");
  resultElement.innerHTML = message;
  resultElement.style.color = color;
}

function displaycontainer1() {
  container1.style.display = "block";
  container2.style.display = "none";
  container3.style.display = "none";
}

function displaycontainer2() {
  container2.style.display = "block";
  container1.style.display = "none";
  container3.style.display = "none";

  updateChances();
}

function displaycontainer3() {
  container3.style.display = "block";
  container2.style.display = "none";
  container1.style.display = "none";
}

document.getElementById("play").addEventListener("click", play);
document.getElementById("submit").addEventListener("click", handleGuessSubmission);
document.getElementById("guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleGuessSubmission();
  }
});
document.getElementById("restart-button").addEventListener("click", restartGame);
document.getElementById("restart").addEventListener("click", restartGame);
document.getElementById("hint").addEventListener("click", provideHint);
