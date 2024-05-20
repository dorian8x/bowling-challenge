const Scorecard = require("./scorecard");

describe("the scorecard class", () => {
    it("initializes with an empty array for the frames of the new game", () => {
        const testScorecard = new Scorecard;
        expect(testScorecard.frames).toEqual([]);
    });

    it("can add new Frames", () => {
        const testScorecard = new Scorecard;
        const fakeFrame = {"roll 1": 5, "roll 2": 4};
        testScorecard.addFrame(5, 4);
        expect(testScorecard.frames).toEqual([fakeFrame]);
    });

    // it("thows an error if given non-numbers as values", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.addFrame("three", 4)).toThrow(/* */);
    // });

    // it("thows an error if given numbers out of range", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.addFrame(3, 11)).toThrow(/* */);
    // });

    // it("thows an error if given total value >10", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.addFrame(7, 4)).toThrow(/* */);
    // });
    // it("calculates the score", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     testScorecard.addFrame(5, 4);
    //     expect(testScorecard.getScore()).toEqual(9);
    //     testScorecard.addFrame(5, 4);
    //     expect(testScorecard.getScore()).toEqual(18);
    // });

    // it("throws an error if given more than 10 frames", () => {
    //     const testScorecard = new Scorecard;
    //     for (let i = 1 ; i < 11 ; i++) { // add ten frames
    //         testScorecard.addFrame(3, 2);
    //     };
    //     expect(testScorecard.addFrame(testFrame)).toThrow(/* */);
    // });

    // it("adds a bonus to the next roll if a frame lands a spare", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     testScorecard.addFrame(6, 4);
    //     expect(testScorecard.getScore()).toEqual(10);
    //     testScorecard.addFrame(5, 4);
    //     expect(testScorecard.getScore()).toEqual(24);
    // });

    // it("adds a bonus to the next two rolls if a frame lands a strike", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     testScorecard.addFrame(10, 0);
    //     expect(testScorecard.getScore()).toEqual(10);
    //     testScorecard.addFrame(5, 4);
    //     expect(testScorecard.getScore()).toEqual(28);
    // });

    // it("the bonus for a strike rolls over to the next frame in the case of two consecutive strikes", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     testScorecard.addFrame(10, 0);
    //     expect(testScorecard.getScore()).toEqual(10);
    //     testScorecard.addFrame(10, 0);
    //     expect(testScorecard.getScore()).toEqual(30);
    //     testScorecard.addFrame(5, 4);
    //     expect(testScorecard.getScore()).toEqual(53);
    // });
    
    // it("allows for a third roll on the tenth frame in the case of a strike or spare", () => {
    //     const testScorecard = new Scorecard;
    //     for (let i = 1 ; i < 10 ; i++) { // add 9 frames
    //         testScorecard.addFrame(5, 4);
    //     };
    //     testScorecard.addFrame(3, 7, 4);
    //     expect(testScorecard.getScore()).toEqual(99);
    // });

    // it("allows for a third roll on the tenth frame in the case of a strike or spare", () => {
    //     const testScorecard = new Scorecard;
    //     for (let i = 1 ; i < 10 ; i++) { // add 9 frames
    //         testScorecard.addFrame(5, 4);
    //     };
    //     expect(testScorecard.addFrame(3, 7, 4)).not.toThrow(/* */);
    // });

    // it("logs 300 points for a perfect game", () => {
    //     const testScorecard = new Scorecard;
    //     const testFrame = new Frame(10, 0);
    //     for (let i = 1 ; i < 10 ; i++) { // add 9 strikes
    //         testScorecard.addFrame(testFrame);
    //     };
    //     testScorecard.addFrame(10, 10, 10);
    //     expect(testScorecard.getScore()).toEqual(300);
    // });
});
