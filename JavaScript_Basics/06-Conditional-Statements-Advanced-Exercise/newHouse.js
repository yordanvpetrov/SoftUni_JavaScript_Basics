function newHouse(flowerType, qty, budget) {
    /// Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    let price = 0;
    switch (flowerType) {
        case "Roses":
            price = qty * 5;
            if (qty > 80) {
                price *= 0.9;
            }
            break;
        case "Dahlias":
            price = qty * 3.8;
            if (qty > 90) {
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = qty * 2.8;
            if (qty > 80) {
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = qty * 3;
            if (qty < 120) {
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = qty * 2.5;
            if (qty < 80) {
                price *= 1.20;
            }
            break;
    }
    if (budget >= price) {
        finalPrice = budget - price;
        console.log(`Hey, you have a great garden with ${qty} ${flowerType} and ${finalPrice.toFixed(2)} leva left.`);
    } else {
        finalPrice = price - budget;
        console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
    }
}