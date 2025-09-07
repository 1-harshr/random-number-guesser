const { userMenu, selectDifficulty, getNumberOfChances, startGame } = require('./main');


function main() {
    userMenu();
    const difficulty = selectDifficulty();
    const numberOfChances = getNumberOfChances(difficulty);
    startGame(numberOfChances);
}

main();