function passwordGenerator(num1, num2) {
    let result = "";

    for (let first = 1; first <= num1; first++) {
        for (let second = 1; second <= num1; second++) {
            for (let firstLetter = 0; firstLetter < num2; firstLetter++) {
                for (let secondLetter = 0; secondLetter < num2; secondLetter++) {
                    for (let third = 1; third <= num1; third++) {
                        if (third > first && third > second) {
                            result += `${first}${second}${String.fromCharCode(97 + firstLetter)}${String.fromCharCode(97 + secondLetter)}${third} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
