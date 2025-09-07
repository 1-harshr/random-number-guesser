const readline = require('readline-sync');

const userMenu = () => {
    console.log('Welcome to the Number Guessing Game!');
    console.log('I\'m thinking of a number between 1 and 100.');
    console.log('You have 5 chances to guess the correct number.');
    console.log('Please select the difficulty level:');
    console.log('1. Easy (10 chances)');
    console.log('2. Medium (5 chances)');
    console.log('3. Hard (3 chances)');
}

const selectDifficulty = () => {
    const difficulty = readline.question('Enter the difficulty level: ');
    return difficulty;
}

const getNumberOfChances = (difficulty) => {
    if (difficulty === '1') {
        return 10;
    } else if (difficulty === '2') {
        return 5;
    } else if (difficulty === '3') {
        return 3;
    } else {
        console.log('Invalid difficulty level');
        return 0;
    }
}

const startGame = (numberOfChances) => {
    console.log(`You have ${numberOfChances} chances to guess the correct number.`);

    const targetNumber = Math.floor(Math.random() * 100) + 1;

    for (let i = 0; i < numberOfChances; i++) {
        const guess = parseInt(readline.question('Enter your guess: '));
        if(guess < targetNumber) {
            console.log(`Too low! The number is greater than ${guess}`);
        } else if(guess > targetNumber) {
            console.log(`Too high! The number is less than ${guess}`);
        } else {
            console.log('You guessed the correct number!');
            return;
        }
    }
    console.log(`The correct number is ${targetNumber}`);
    return;
}

module.exports = {
    userMenu,
    selectDifficulty,
    getNumberOfChances,
    startGame
}