class Scorecard {
    constructor() {
        this.frames = [];
    }
    addFrame(roll_1, roll_2 /* , roll_3 = null */) {
        this.frames.push({"roll 1": roll_1, "roll 2": roll_2});
    }
};

module.exports = Scorecard;
