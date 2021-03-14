// Define the options of our application
const HiLow = {
    data() {
        return {
            mysteryNumber: null,
            gameCount: 0,
            guesses: 10,
            guessCount: 0,
            currentGuess: null,
            instructions: `Guess what number I'm thinking of between 1 and 10 (inclusive)!`,
            winning: false,
            feedback: null,
            scores: [],
            history: [],
            roundOver: false,
            gameOver: false,
            imageSource: '/static/questionguy.png',
            imageAlt: 'question guy'
        }
    },
    methods: {
        startNewGame() {
            this.feedback = '';
            this.winning = false;
            this.currentGuess = null;
            this.roundOver = false;
            this.gameOver = false;
            this.mysteryNumber = Math.floor(Math.random() * 10 + 1);
            console.log(`secret number is: ${this.mysteryNumber}`);
            this.guesses = 10;
            this.guessCount = 0;
            this.gameCount = 1;
            this.scores = [];
            console.log(`gamecount is ${this.gameCount}`);
        },
        nextGame() {
            this.feedback = '';
            this.winning = false;
            this.roundOver = false;
            this.currentGuess = null;
            this.mysteryNumber = Math.floor(Math.random() * 10 + 1);
            console.log(`secret number is: ${this.mysteryNumber}`);
            this.guesses = this.guesses === 1 ? 1 : this.guesses - 1;
            this.guessCount = 0;
            this.gameCount++;
            console.log(`gamecount is ${this.gameCount}`);
        },
        resetGame() {
            this.feedback = '';
            this.currentGuess = null;
            this.roundOver = false;
            this.gameOver = false;
            this.mysteryNumber = Math.floor(Math.random() * 10 + 1);
            console.log(`secret number is: ${this.mysteryNumber}`);
            this.guesses = 10;
            this.guessCount = 0;
            this.gameCount = 1;
            this.scores = [];
            this.history = [];
            console.log(`gamecount is ${this.gameCount}`);
        },
        guessNumber() {
            console.log(`guess is ${this.currentGuess}`)
            if (!this.gameOver) {
                if (this.currentGuess === null || this.currentGuess === '') {
                    this.feedback = "I didn't quite understand you. Please try again."
                } else if (this.winning) {
                    this.feedback = "You've already won. Start a new round. :)"
                } else if (this.currentGuess === this.mysteryNumber) {
                    this.guesses--;
                    this.guessCount++;
                    this.winning = true;
                    this.feedback = `Congratulations, you got it!`
                    this.scores.push({ winner: 'Player', gameCount: this.gameCount, numGuesses: this.guessCount });
                    this.roundOver = true;
                } else if (this.currentGuess < this.mysteryNumber) {
                    this.guesses--;
                    this.guessCount++;
                    this.feedback = "Too low, try again."
                } else if (this.currentGuess > this.mysteryNumber) {
                    this.guesses--;
                    this.guessCount++;
                    this.feedback = "Too high, try again."
                } else {
                    this.feedback = "I didn't quite understand you. Please try again."
                }

                if (this.guesses <= 0) {
                    this.feedback = `Too bad, you have no more guesses remaining. :( The secret number was ${this.mysteryNumber}.`;
                    this.scores.push({ winner: 'Computer', gameCount: this.gameCount, numGuesses: this.guessCount });
                    this.history.push({ rounds: this.gameCount - 1 });
                    this.roundOver = true;
                    this.gameOver = true;
                }
            } else {
                this.feedback = `This game is over. Click New Game to try again.`
            }
        }
    }
}

const GuessFeedback = {
    name: 'GuessFeedback',
    props: {
        winning: {
            type: Boolean
        },
        feedback: {
            type: String
        },
        guesses: {
            type: Number
        },
        roundOver: {
            type: Boolean
        },
        gameOver: {
            type: Boolean
        },
        gameCount: {
            type: Number
        }
    },
    template: '#guess-feedback',
};

const ScoreBoard = {
    name: 'ScoreBoard',
    props: {
        scores: {
            type: Array
        },
        history: {
            type: Array
        }
    },
    template: '#score-board',
};

// Create a new Vue instance using our options
const app = Vue.createApp(HiLow);
app.component('guess-feedback', GuessFeedback);
app.component('score-board', ScoreBoard);
app.mount('#app');