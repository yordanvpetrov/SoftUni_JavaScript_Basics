function foodDelivery(qtyChicken, qtyFish, qtyVego) {
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegoPrice = 8.15;
    let mealsSum = qtyChicken * chickenPrice + qtyFish * fishPrice + qtyVego * vegoPrice;
    let dessertPrice = mealsSum * 0.20;
    let totalPrice = mealsSum + dessertPrice + 2.50;
    console.log(totalPrice);
    
}