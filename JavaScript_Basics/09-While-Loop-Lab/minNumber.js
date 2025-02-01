function minNumber(input) {
    let index = 0;
    let action = input[index];
    index++;
    let lowestNumber = Number.MAX_SAFE_INTEGER;

    while (action !== "Stop") {
        if (lowestNumber > action) {
            lowestNumber = Number(action);
        }
        action = input[index];
        index++;
    }
    console.log(lowestNumber);
}