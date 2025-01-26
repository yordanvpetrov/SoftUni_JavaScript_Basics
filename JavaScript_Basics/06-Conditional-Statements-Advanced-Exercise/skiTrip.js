function skiTrip(days, roomType, feedback) {
    let nights = days - 1;
    let totalPrice = 0;
    switch (roomType) {
        case "room for one person":
            totalPrice = nights * 18;
            break;
        case "apartment":
            totalPrice = nights * 25;
            if (nights <= 10) {
                totalPrice *= 0.7;
            } else if (nights <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
            break;
        case "president apartment":
            totalPrice = nights * 35;
            if (nights <= 10) {
                totalPrice *= 0.9;
            } else if (nights <= 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
            break;
    }

    if (feedback === "positive") {
        totalPrice *= 1.25;
    } else if (feedback === "negative") {
        totalPrice *= 0.9;
    }
    console.log(totalPrice.toFixed(2));
}