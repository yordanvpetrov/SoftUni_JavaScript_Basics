function bills(input) {
    let index = 0;
    let months = Number(input[index]);
    index++;
    let electricityBill = Number(input[index]);
    index++;

    let totalElectricity = 0;
    let totalWater = 0;
    let totalInternet = 0;
    let totalOthers = 0;

    let currentOthers = 0;

    for (let i = 1; i <= months; i++) {
        totalElectricity += electricityBill;
        totalWater += 20;
        totalInternet += 15;
        currentOthers += electricityBill + 20 + 15;
        totalOthers += currentOthers + (currentOthers * 0.20);
        currentOthers = 0;

        electricityBill = Number(input[index]);
        index++;
    }
    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOthers.toFixed(2)} lv`);
    console.log(`Average: ${((totalElectricity + totalInternet + totalOthers +totalWater) / months).toFixed(2)} lv`);
}
