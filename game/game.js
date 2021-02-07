let number;
let remainingGuesses;
let winning;

function showGame() {
    winning = false;
    number = Math.floor(Math.random() * 10 + 1);
    remainingGuesses = 5;
    document.getElementById('main').className = "shown";
    document.getElementById('remainingGuesses').className = "shown";
    document.getElementById('instructions').innerHTML = "Guess what number I'm thinking of between 1 and 10 (inclusive)!"
    document.getElementById('remainingGuesses').innerHTML = `You have ${remainingGuesses} guesses remaining.`;
    console.log(`Don't tell anyone, but the secret number is ${number}`);
}

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', showGame);

function guessNumber() {
    let guess = document.getElementById('guess').value;
    if (winning) {
        document.getElementById('instructions').innerHTML = "You've already won. Start a new game. :)"
    } else if (parseInt(guess) === number) {
        winning = true;
        document.getElementById('instructions').innerHTML = "Congratulations, you got it!"
        document.getElementById('remainingGuesses').className = "hidden";
    } else if (parseInt(guess) < number) {
        remainingGuesses--;
        document.getElementById('remainingGuesses').innerHTML = `You have ${remainingGuesses} guesses remaining.`;
        document.getElementById('instructions').innerHTML = "Too low, try again."
    } else if (parseInt(guess) > number) {
        remainingGuesses--;
        document.getElementById('remainingGuesses').innerHTML = `You have ${remainingGuesses} guesses remaining.`;
        document.getElementById('instructions').innerHTML = "Too high, try again."
    } else {
        document.getElementById('instructions').innerHTML = "I didn't quite understand you. Please try again."
    }

    if (remainingGuesses <= 0) {
        document.getElementById('instructions').innerHTML = `Too bad, you have no more guesses remaining. :( The secret number was ${number}. Try again by starting a new game!`;
        document.getElementById('remainingGuesses').className = "hidden";
    }
}

const guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', guessNumber);