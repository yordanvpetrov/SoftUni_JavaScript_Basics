function equalSumsEvenOddPosition(start, end) {
    let result = "";

    for (let i = start; i <= end; i++) {
        let stringNum = i + "";

        let oddSum = 0;
        let evenSum = 0;

        for (let x = 0; x < stringNum.length; x++) {
            let checkNumber = stringNum.charAt(x);
            
            if (x % 2 === 0) {
                evenSum += Number(checkNumber);
            } else {
                oddSum += Number(checkNumber);
            }
            
        }
        if (oddSum === evenSum) {
            result += i + " ";
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(100000,
    100050);