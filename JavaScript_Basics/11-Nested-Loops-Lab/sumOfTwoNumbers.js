function sumOfTwoNumbers(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let magicNumber = Number(arg3);

    let combinations = 0;
    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            combinations++;
            let result = x + y;
            if (result === magicNumber) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNumber})`)
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }
}