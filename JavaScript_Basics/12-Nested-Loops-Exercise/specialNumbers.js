function specialNumbers(number) {
    let start = 1111;
    let end = 9999;

    let result = "";
    let isSpecial = false;

    for (let i = start; i <= end; i++) {

        let strNumber = i + "";

        for (let x = 0; x < strNumber.length; x++) {

            let checkNum = Number(strNumber.charAt(x));

            if (number % checkNum === 0) {
                isSpecial = true;
            } else {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += strNumber + " ";
        }
    }
    console.log(result);
}