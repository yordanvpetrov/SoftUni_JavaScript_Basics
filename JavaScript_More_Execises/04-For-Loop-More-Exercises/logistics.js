function logistics(input) {
    let loads = input[0];
    let index = 1;
    let tons = Number(input[index]);
    index++;

    let withVan = 0;
    let withTruck = 0;
    let withTrain = 0;
    let totalTons = 0;
    let totalPrice = 0;
    for (let i = 1; i <= loads; i++) {
        totalTons += tons;
        if (tons <= 3) {
            withVan += tons;
            totalPrice += tons * 200;
        } else if (tons <= 11) {
            withTruck += tons;
            totalPrice += tons * 175;
        } else {
            withTrain += tons;
            totalPrice += tons * 120;
        }
        tons = Number(input[index]);
        index++;
    }
    console.log(`${(totalPrice / totalTons).toFixed(2)}`);
    console.log(`${(withVan / totalTons * 100).toFixed(2)}%`);
    console.log(`${(withTruck / totalTons * 100).toFixed(2)}%`);
    console.log(`${(withTrain / totalTons * 100).toFixed(2)}%`);
}