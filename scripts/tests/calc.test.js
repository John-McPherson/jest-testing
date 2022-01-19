/**
 * @jest-environment jsdom
 */
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 32 for 20 + 12", () => {
            expect(addition(20, 12)).toBe(32);
        });

    })
    describe("Subtraction function", () => {

    })
    describe("Multiply function", () => {

    })
    describe("Division function", () => {

    })
})