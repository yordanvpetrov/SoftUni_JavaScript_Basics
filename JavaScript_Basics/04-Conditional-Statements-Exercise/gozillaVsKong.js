function godzillaVsKong(budget, qtyStaff, clothesPrice) {
    let decorPrice = budget * 0.10;
    let clothesDiscountPrice = 0

    if (qtyStaff > 150) {
        clothesPrice -= clothesPrice * 0.10;
    }

    let totalPrice = decorPrice + qtyStaff * clothesPrice;

    if (totalPrice <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);

    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);

    }
}