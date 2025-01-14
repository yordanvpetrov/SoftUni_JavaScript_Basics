function repainting(qtyNylon, qtyPaint, qtyThinner, hours) {
    let nylon = 1.50;
    let paint = 14.50;
    let thinner = 5;
    let nylonPrice = (qtyNylon + 2) * nylon;
    let paintPrice = (qtyPaint + qtyPaint * 0.10) * paint;
    let thinnerPrice = qtyThinner * thinner;
    let totalMaterialPrice = nylonPrice + paintPrice + thinnerPrice + 0.40; // + bag price
    let workPrice = (totalMaterialPrice * 0.30) * hours;
    let totalPrice = totalMaterialPrice + workPrice;
    console.log(totalPrice);
    
}