function sumNumbers(input) {
    index = 0;
    let target = Number(input[index]);
    index++;
    let sumNumbs = 0;
    while (sumNumbs < target) {
        checkNum = Number(input[index]);
        index++;
        sumNumbs += Number(checkNum);
    }
    console.log(sumNumbs);
}