function cleverLily(age, targetPrice, toyPrice) {
    let savedMoney = 0;
    let toysQty = 0;
    let counter = 1;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            for (x = 1; x <= counter; x++) {
                savedMoney += 10;
            }
            savedMoney--;
            counter++
        } else {
            toysQty++;
        }
    }
    let totalMoney = savedMoney + toysQty * toyPrice;
    if (targetPrice <= totalMoney) {
        let leftMoney = totalMoney - targetPrice;
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        let neededMoney = targetPrice - totalMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

cleverLily(10,
    170.00,
    6)