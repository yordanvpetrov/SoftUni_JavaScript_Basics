function maxNumber(input) {
    let index = 0;
    let currentNumb = input[index];
    index++;
    let biggestNumber = Number.MIN_SAFE_INTEGER
    while (currentNumb !== "Stop") {
        if (biggestNumber < currentNumb) {
            biggestNumber = Number(currentNumb);
        }
        currentNumb = input[index];
        index++;
    }
    console.log(biggestNumber);
}