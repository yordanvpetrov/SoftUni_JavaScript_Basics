function lunchBreak(seriesName, episodeDuration, breakDuration) {
    let lunchTime = breakDuration / 8;
    let relaxTime = breakDuration / 4;
    let neededTime = episodeDuration + lunchTime + relaxTime;

    if (neededTime <= breakDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakDuration - neededTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(neededTime - breakDuration)} more minutes.`);

    }
}

lunchBreak("Game of Thrones",
60,
96)