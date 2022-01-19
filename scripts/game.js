let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0,
}

function newGame() {
    game.score = 0;
    [game.playerMoves, game.currentGame] = [
        [],
        []
    ];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute('id');
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            })
            circle.setAttribute("data-listener", "true");
        };
    }
    showScore()
    addTurn()
}

function showScore() {
    document.getElementById('score').innerText = game.score;
}

function addTurn() {
    game.playerMoves = [];
    let x = Math.floor(Math.random() * 4);
    game.currentGame.push(game.choices[x]);
    showTurns();

}

function lightsOn(circ) {
    document.getElementById(circ).classList.add('light');
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light');
    }, 400);

}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns)
        }

    }, 800);

}

function playerTurn() {
    if (game.playerMoves[game.playerMoves.length - 1] === game.currentGame[game.playerMoves.length - 1]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    }
}

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns,
    playerTurn
};