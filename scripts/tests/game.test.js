/**
 * @jest-environment jsdom
 */

const {
    game
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
    })
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    })
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    })
})