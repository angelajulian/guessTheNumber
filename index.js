const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let highNum;
let lowNum;
let guessNum;
let correctNum;


function pickHighest(highAnswer) {
    if (isNaN(highAnswer)) {
        console.log("Try again with a number.")
        rl.question("Pick the highest number:", pickHighest);
        ;
    }
    highNum = Math.floor(highAnswer);
    rl.question("Pick the lowest number:", pickLowest)
}

function pickLowest(lowAnswer) {
    if (isNaN(lowAnswer)) {
        console.log("Try again with a number.")
        rl.question("Pick the lowest number:", pickLowest)
    }
    lowNum = Math.ceil(lowAnswer);
    correctNum = Math.floor(Math.random() * (highNum - lowNum) + lowNum)
    if (lowNum >= highNum) {
        console.log(`You must pick a number lower than ${highNum}.`)
        rl.question("Pick the lowest number:", pickLowest)
    }

    rl.question("Pick how many guesses you'll get: ", pickGuess)
}

function pickGuess(guessAnswer) {
    if (isNaN(guessAnswer)) {
        console.log("Try again with a number.")
        rl.question(`I'm thinking of a number between ${highNum} and ${lowNum}. Guess the number: `, GuessTheNumber)
    }
    guessNum = guessAnswer;

    rl.question(`I'm thinking of a number between ${highNum} and ${lowNum}. Guess the number: `, GuessTheNumber)
}

function GuessTheNumber(guessAnswer) {
    if (isNaN(guessAnswer)) {
        console.log("Try again with a number.")
        rl.question(`I'm thinking of a number between ${highNum} and ${lowNum}. Guess the number: `, GuessTheNumber)
    }
    guessNum--;
    // console.log(guessAnswer, correctNum)
    if (guessAnswer == correctNum) {
        console.log(`That's right, it was ${correctNum}! \n CONGRATS YOU WIN!`)
        end();
    } else if (guessAnswer < correctNum) {
        console.log(`The number is higher.`)
        rl.question(`I'm thinking of a number between ${highNum} and ${lowNum}. Guess the number: `, GuessTheNumber)
    } else {
        console.log("The number is lower.")
        rl.question(`I'm thinking of a number between ${highNum} and ${lowNum}. Guess the number: `, GuessTheNumber)
    }

    if (guessNum <= 0) {
        console.log("Too bad! Better luck next time!")
        end();
    }



}

function end() {
    rl.close()
}

rl.question("Pick the highest number:", pickHighest);
