function shopping(budget, qtyGpu, qtyCpu, qtyRam) {
    let gpuPrice = qtyGpu * 250;
    let cpuPrice = qtyCpu * (gpuPrice * 0.35);
    let ramPrice = qtyRam * (gpuPrice * 0.10);
    let totalPrice = gpuPrice + cpuPrice + ramPrice;

    if (qtyGpu > qtyCpu) {
        totalPrice -= totalPrice * 0.15;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}