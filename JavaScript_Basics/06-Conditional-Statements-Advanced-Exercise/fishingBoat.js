function fishingBoat(budget, season, people) {
    let cost = 0;
    switch (season) {
        case "Summer":
        case "Autumn":
            cost = 4200;
            break;
        case "Spring":
            cost = 3000;
            break;
        case "Winter":
            cost = 2600;
            break;
    }

    if (people <= 6) {
        cost *= 0.90;
    } else if (people <= 11) {
        cost *= 0.85;
    } else {
        cost *= 0.75;
    }

    if (people % 2 == 0 && season !== "Autumn") {
        cost *= 0.95
    }

    if (budget >= cost) {
        price = budget - cost;
        console.log(`Yes! You have ${price.toFixed(2)} leva left.`);
    } else {
        price = cost - budget;
        console.log(`Not enough money! You need ${price.toFixed(2)} leva.`)
    }
}