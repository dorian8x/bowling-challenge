const Frame = require("./frame")

describe("the frame class", () => {
    it("initializes with an empty array for the frames of the new game", () => {
        const testFrame = new Frame(3, 4);
        expect(testFrame).toEqual({roll_1: 3, roll_2: 4});
    });

    // it("thows an error if given non-numbers as values", () => {
    //     const testFrame = new Frame("three", 4);
    //     expect(testFrame).toThrow(/* */);
    // });

    // it("thows an error if given numbers out of range", () => {
    //     const testFrame = new Frame(3, 11);
    //     expect(testFrame).toThrow(/* */);
    // });

    // it("thows an error if given total value >10", () => {
    //     const testFrame = new Frame(7, 4);
    //     expect(testFrame).toThrow(/* */);
    // });
});
