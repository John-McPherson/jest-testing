/**
 * @jest-environment jsdom
 */

const {
    game,
    newGame,
    showScore,
    addTurn
} = require("../game");
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("score key exists", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
})

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2", "button3", "button4"];
        game.currentGame = ["button1", "button2", "button3", "button4"];
        document.getElementById('score').innerText = '42';
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear playerMoves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should be one move in the currentGame array", () => {
        expect(game.currentGame.length).toEqual(1);
    });
    test("currentGame array content should be match an index from choices ", () => {
        expect(game.choices).toContain(game.currentGame[0]);
    });
    test("should display zero for the element with the id of 'score'", () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
})

describe("Gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.playerMoves = [];
        game.currentGame = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.playerMoves = [];
        game.currentGame = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("currentGame array[0] content should be match an index from choices ", () => {
        addTurn();
        expect(game.choices).toContain(game.currentGame[0]);
    });
    test("currentGame[1] array content should be match an index from choices ", () => {
        addTurn();
        expect(game.choices).toContain(game.currentGame[1]);
    });
});