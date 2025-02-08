function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let action = input[index];
    index++;

    let target = Number(action);
    let savedMoney = 0;
    while (destination !== "End") {
        while (savedMoney < target) {
            action = input[index];
            index++;
            savedMoney += Number(action);
        }
        console.log(`Going to ${destination}!`);
        action = input[index];
        index++;
        destination = action;
        savedMoney = 0;
        action = input[index];
        target = action;
        index++;
    }
}