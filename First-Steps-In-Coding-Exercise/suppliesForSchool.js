function supplies(qtyPens, qtyMarkers, detergent, discountPercent) {
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let detergentPrice = 1.20;
    let discount = discountPercent / 100;
    let totalSum = qtyPens * pensPrice + qtyMarkers * markersPrice + detergent * detergentPrice;
    let totalPrice = totalSum - totalSum * discount;
    console.log(totalPrice);

}