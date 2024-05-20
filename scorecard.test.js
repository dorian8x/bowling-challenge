const Scorecard = require("./scorecard");
const Frame = require("./frame");

describe("the scorecard class", () => {
    it("initializes with an empty array for the frames of the new game", () => {
        const testScorecard = new Scorecard;
        expect(testScorecard.frames).toEqual([]);
    });

    it("can add new Frames", () => {
        const testScorecard = new Scorecard;
        const testFrame = new Frame(5, 4);
        testScorecard.addFrame(testFrame);
        expect(testScorecard.frames).toEqual([testFrame]);
    });

    // it("calculates the score", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     const testFrame1 = new Frame(5, 4);
    //     testScorecard.addFrame(testFrame1);
    //     expect(testScorecard.getScore()).toEqual(9);
    //     const testFrame2 = new Frame(5, 4);
    //     testScorecard.addFrame(testFrame2);
    //     expect(testScorecard.getScore()).toEqual(18);
    // });

    // it("throws an error if given more than 10 frames", () => {
    //     const testScorecard = new Scorecard;
    //     const testFrame = new Frame(3, 2);
    //     for (let i = 1 ; i < 11 ; i++) { // add ten frames
    //         testScorecard.addFrame(testFrame);
    //     };
    //     expect(testScorecard.addFrame(testFrame)).toThrow(/* */);
    // });

    // it("adds a bonus to the next roll if a frame lands a spare", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     const testFrame1 = new Frame(6, 4);
    //     testScorecard.addFrame(testFrame1);
    //     expect(testScorecard.getScore()).toEqual(10);
    //     const testFrame2 = new Frame(5, 4);
    //     testScorecard.addFrame(testFrame2);
    //     expect(testScorecard.getScore()).toEqual(24);
    // });

    // it("adds a bonus to the next two rolls if a frame lands a strike", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     const testFrame1 = new Frame(10, 0);
    //     testScorecard.addFrame(testFrame1);
    //     expect(testScorecard.getScore()).toEqual(10);
    //     const testFrame2 = new Frame(5, 4);
    //     testScorecard.addFrame(testFrame2);
    //     expect(testScorecard.getScore()).toEqual(28);
    // });

    // it("the bonus for a strike rolls over to the next frame in the case of two consecutive strikes", () => {
    //     const testScorecard = new Scorecard;
    //     expect(testScorecard.getScore()).toEqual(0);
    //     const testFrame1 = new Frame(10, 0);
    //     testScorecard.addFrame(testFrame1);
    //     expect(testScorecard.getScore()).toEqual(10);
    //     const testFrame2 = new Frame(10, 0);
    //     testScorecard.addFrame(testFrame2);
    //     expect(testScorecard.getScore()).toEqual(30);
    //     const testFrame3 = new Frame(5, 4);
    //     testScorecard.addFrame(testFrame3);
    //     expect(testScorecard.getScore()).toEqual(53);
    // });
    
    // it("logs 300 points for a perfect game", () => {
    //     const testScorecard = new Scorecard;
    //     const testFrame = new Frame(10, 0);
    //     for (let i = 1 ; i < 10 ; i++) {
    //         testScorecard.addFrame(testFrame);
    //     };
    //     const testTenthFrame = new Frame(10, 10, 10);
    //     testScorecard.addFrame(testTenthFrame);
    //     expect(testScorecard.getScore()).toEqual(300);
    // });
});
