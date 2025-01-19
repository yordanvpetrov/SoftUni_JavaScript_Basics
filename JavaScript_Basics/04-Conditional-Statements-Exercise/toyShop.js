function toyShop(vacationCost, qtyPuzzles, qtyDolls, qtyBears, qtyMinions, qtyTrucks) {
    let puzzlesPrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let sumToys = qtyPuzzles + qtyDolls + qtyBears + qtyMinions + qtyTrucks;
    let priceWithoutDiscount = (qtyPuzzles * puzzlesPrice) + (qtyDolls * dollsPrice) + (qtyBears * bearsPrice) + (qtyMinions * minionsPrice) + (qtyTrucks * trucksPrice);

    if (sumToys >= 50) {
        priceWithoutDiscount -= priceWithoutDiscount * 0.25;
    }

    let totalProfit = priceWithoutDiscount - (priceWithoutDiscount * 0.10);

    if (totalProfit >= vacationCost) {
        console.log(`Yes! ${(totalProfit - vacationCost).toFixed(2)} lv left.`);
        
    } else {
        console.log(`Not enough money! ${(vacationCost - totalProfit).toFixed(2)} lv needed.`);
        
    }
}