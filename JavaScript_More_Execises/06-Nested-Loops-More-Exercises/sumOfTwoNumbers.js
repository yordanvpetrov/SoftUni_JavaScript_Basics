function sumOfTwoNumbers(arg1, arg2, arg3) {
    let start = arg1;
    let end = arg2;
    let magicNumber = arg3;

    let totalCombinations = 0;
    let isFound = false;

    let result = "";

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            totalCombinations++;
            let currentNum = x + y;
            if (currentNum === magicNumber) {
                isFound = true;
                result = `Combination N:${totalCombinations} (${x} + ${y} = ${magicNumber})`;
                break;
            }
        }
        if (isFound) {
            break;
        } else {
            result = `${totalCombinations} combinations - neither equals ${magicNumber}`;
        }
    }
    console.log(result);
}
