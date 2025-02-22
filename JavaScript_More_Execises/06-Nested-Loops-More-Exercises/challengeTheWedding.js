function challengeTheWedding(men, women, max) {
    let result = "";
    let tableCount = 0;
    let couplesCount = 0;
    let maxCouples = men * women;
    let isFinish = false;

    for (let table = 1; table <= max; table++) {
        for (let m = 1; m <= men; m++) {
            for (let w = 1; w <= women; w++) {
                result += `(${m} <-> ${w}) `
                tableCount++;
                couplesCount++;

                if (tableCount === max) {
                    isFinish = true;
                    break;
                } else if (couplesCount === maxCouples) {
                    isFinish = true;
                    break;
                }
            }
            if (isFinish) {
                break;
            }
        }
        if (isFinish) {
            break;
        }
    }
    console.log(result);
}
