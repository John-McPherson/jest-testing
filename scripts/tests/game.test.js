/**
 * @jest-environment jsdom
 */
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
})