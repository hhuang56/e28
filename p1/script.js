// Define the options of our application
const ShoppingList = {
    data() {
        return {
            mysteryNumber: null,
            gameCount: 0,
            maxGuesses: 5,
            remainingGuesses: null,
            currentGuess: null,
            instructions: null,
            winning: false,
        }
    },
    methods: {
        startGame() {
            this.instructions = `Guess what number I'm thinking of between 1 and 10 (inclusive)!`;
            this.currentGuess = null;
            this.mysteryNumber = Math.floor(Math.random() * 10 + 1);
            console.log(`secret number is: ${this.mysteryNumber}`);
            this.maxGuesses = 5;
            this.remainingGuesses = this.maxGuesses;
            this.gameCount = 1;
            console.log(`gamecount is ${this.gameCount}`);
        },
        nextGame() {
            this.instructions = `Guess what number I'm thinking of between 1 and 10 (inclusive)!`;
            this.currentGuess = null;
            this.mysteryNumber = Math.floor(Math.random() * 10 + 1);
            console.log(`secret number is: ${this.mysteryNumber}`);
            this.maxGuesses = this.maxGuesses - this.gameCount > 0 ? this.maxGuesses - this.gameCount : 1;
            this.remainingGuesses = this.maxGuesses;
            this.gameCount++;
            console.log(`gamecount is ${this.gameCount}`);
        },
        guessNumber() {
            console.log(`guess is ${this.currentGuess}`)
            if (this.winning) {
                this.instructions = "You've already won. Start a new game. :)"
            } else if (this.currentGuess === this.mysteryNumber) {
                this.remainingGuesses--;
                this.winning = true;
                this.instructions = "Congratulations, you got it!"
            } else if (this.currentGuess < this.mysteryNumber) {
                this.remainingGuesses--;
                this.instructions = "Too low, try again."
            } else if (this.currentGuess > this.mysteryNumber) {
                this.remainingGuesses--;
                this.instructions = "Too high, try again."
            } else {
                this.instructions = "I didn't quite understand you. Please try again."
            }

            if (this.remainingGuesses <= 0) {
                this.instructions = `Too bad, you have no more guesses remaining. :( The secret number was ${number}. Try again by starting a new game!`;
            }
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(ShoppingList).mount('#app');