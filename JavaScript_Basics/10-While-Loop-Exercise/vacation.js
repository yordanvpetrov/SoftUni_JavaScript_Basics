function vacation(input) {
    let index = 0;
    let targetMoney = Number(input[index]);
    index++;
    let currentMonet = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let amount = Number(input[index]);
    index++

    let dayCount = 0;
    let spendCounter = 0;

    while (currentMonet < targetMoney) {
        dayCount++;
        if (action === "save") {
            currentMonet += amount;
            spendCounter = 0;
        } else if (action === "spend") {
            currentMonet -= amount;
            spendCounter++;
            if (currentMonet < 0) {
                currentMonet = 0;
            }
            if (spendCounter === 5) {
                break;
            }

        }
        action = input[index];
        index++;
        amount = Number(input[index]);
        index++
    }
    if (targetMoney <= currentMonet) {
        console.log(`You saved the money for ${dayCount} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(`${dayCount}`);
    }
}