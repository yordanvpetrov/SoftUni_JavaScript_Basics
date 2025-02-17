function uniquePinCodes(num1, num2, num3) {
    for (let digit1 = 2; digit1 <= num1; digit1++) {
        for (let digit2 = 1; digit2 <= num2; digit2++) {
            for (let digit3 = 2; digit3 <= num3; digit3++) {
                if (digit1 % 2 === 0 && digit3 % 2 === 0) {
                    if (digit2 === 2 || digit2 === 3 || digit2 === 5 || digit2 === 7) {
                        console.log(`${digit1} ${digit2} ${digit3}`);
                    }
                }
            }
        }
    }
}