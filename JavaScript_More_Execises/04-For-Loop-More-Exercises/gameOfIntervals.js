function gameOfIntervals(input) {
    let index = 0;
    let gameRounds = Number(input[index]);
    index++;
    let points = Number(input[index]);
    index++;

    let totalPoints = 0;
    let fromZeroToNine = 0;
    let fromTenToNineteen = 0;
    let fromTwentyToTwentynine = 0;
    let fromThirtyToThirtynine = 0;
    let fromFortyToFifty = 0;
    let invalidNumbers = 0;

    for (let i = 1; i <= gameRounds; i++) {
        if (points < 0 || points > 50) {
            totalPoints /= 2;
            invalidNumbers++;
        } else if (points <= 9) {
            totalPoints += points * 0.20;
            fromZeroToNine++;
        } else if (points <= 19) {
            totalPoints += points * 0.30;
            fromTenToNineteen++;
        } else if (points <= 29) {
            totalPoints += points * 0.40;
            fromTwentyToTwentynine++;
        } else if (points <= 39) {
            totalPoints += 50;
            fromThirtyToThirtynine++;
        } else if (points <= 50) {
            totalPoints += 100;
            fromFortyToFifty++;
        }

        points = Number(input[index]);
        index++;
    }
    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${((fromZeroToNine / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((fromTenToNineteen / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((fromTwentyToTwentynine / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((fromThirtyToThirtynine / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((fromFortyToFifty / gameRounds) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidNumbers / gameRounds) * 100).toFixed(2)}%`);
}