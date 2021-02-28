// Define the options of our application
const ShoppingList = {
    data() {
        return {
            started: false,
            playerName: "",
            winning: false,
            wrong: false,
            guess: "",
            level: "easy",
            mysteryWord: {
                level: "",
                mysteryWord: "",
                hint: "",
            },
            words: [
                {
                    level: "easy",
                    mysteryWord: "love",
                    hint: "Valentine"
                },
                {
                    level: "easy",
                    mysteryWord: "pencil",
                    hint: "writing"
                },
                {
                    level: "medium",
                    mysteryWord: "apple",
                    hint: "Red"
                },
                {
                    level: "medium",
                    mysteryWord: "washington",
                    hint: "Rushmore"
                },
                {
                    level: "hard",
                    mysteryWord: "pumpkin",
                    hint: "Halloween"
                },
                {
                    level: "hard",
                    mysteryWord: "football",
                    hint: "Feet"
                }
            ]
        }
    },
    computed: {
        scrambledWord() {
            return this.scramble(this.mysteryWord.mysteryWord);
        },
        feedback() {
            if (this.winning) {
                return 'You got it!'
            } else if (this.wrong) {
                return 'Try again!'
            } else {
                return '';
            }
        }
    },
    methods: {
        startGame() {
            this.started = true;
            this.winning = false;
            this.wrong = false;
            this.guess = "";
            let filteredList = this.words.filter(elem => elem.level === this.level);
            let previousWord = this.mysteryWord.mysteryWord;
            while (this.mysteryWord.mysteryWord === previousWord)
                this.mysteryWord = filteredList[Math.floor(Math.random() * filteredList.length)]
        },
        guessWord() {
            if (this.guess.toLowerCase() === this.mysteryWord.mysteryWord) {
                this.winning = true;
            } else {
                this.wrong = true;
            }
        },
        scramble(readableWord) {
            // copied from github
            // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
            let scrambledWord = readableWord.split("");
            let n = scrambledWord.length;

            for (var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = scrambledWord[i];
                scrambledWord[i] = scrambledWord[j];
                scrambledWord[j] = tmp;
            }
            return scrambledWord.join("");
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(ShoppingList).mount('#app');