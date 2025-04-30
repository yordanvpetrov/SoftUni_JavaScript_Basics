function theSongOfTheWheels(number) {

    let result = "";
    let password = "";
    let counter = 0;

    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d)
                        if (a * b + c * d === number) {
                            result += `${a}${b}${c}${d} `
                            counter++;
                            if (counter === 4) {
                                password = `${a}${b}${c}${d}`
                                isFound = true;
                            }
                        }
                }
            }
        }
    }
    if (isFound) {
        console.log(result);
        console.log(`Password: ${password}`);
    } else if (counter > 0) {
        console.log(result);
        console.log(`No!`);
    } else {
        console.log(`No!`);  
    }
}
