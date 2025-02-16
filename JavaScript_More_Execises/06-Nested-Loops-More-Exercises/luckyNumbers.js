function luckyNumbers(number) {
    let result = "";

    for (let digit1 = 1; digit1 <= 9; digit1++) {
        for (let digit2 = 1; digit2 <= 9; digit2++) {
            for (let digit3 = 1; digit3 <= 9; digit3++) {
                for (let digit4 = 1; digit4 <= 9; digit4++) {
                    let sum1 = digit1 + digit2;
                    let sum2 = digit3 + digit4;

                    if (sum1 === sum2) {
                        if (number % sum1 === 0) {
                            result += `${digit1}${digit2}${digit3}${digit4} `
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
