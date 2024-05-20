class Scorecard {
    constructor() {
        this.frames = [];
    }
    addFrame(roll_1, roll_2 /* , roll_3 = null */) {
        if (checkValidScore(roll_1, roll_2)) {
            this.frames.push({"roll 1": roll_1, "roll 2": roll_2});
        }
    }
};


const checkValidScore = (roll_1, roll_2) => {
    if (isNaN(roll_1) || isNaN(roll_2)) {
        throw new Error("Enter values as numbers.");
    } else if (roll_1 < 0 || roll_1 > 10 || roll_2 < 0 || roll_2 > 10) {
        throw new Error("Enter valid scores");
    } else if (roll_1 + roll_2 > 10) {
        throw new Error("Enter valid scores");
    } else {
        return true;
    }
};

// notes for user interface:
// try {
//     addFrame(3, 'four');
// } catch (e) {
//     console.error(e);
//     // Expected output: Error: Enter values as numbers.
// };

module.exports = Scorecard;
