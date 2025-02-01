function accountBalance(input) {
    let index = 0;
    let currentBalance = 0;
    let action = input[index];
    index++;
    while (action !== "NoMoreMoney") {
        let money = Number(action);
        if (money <= 0) {
            console.log("Invalid operation!");
            break;
        }
        currentBalance += money;
        console.log(`Increase: ${money.toFixed(2)}`);
        action = input[index];
        index++;
    }
    console.log(`Total: ${currentBalance.toFixed(2)}`);
}