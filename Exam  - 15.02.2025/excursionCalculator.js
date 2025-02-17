function excursionCalculator(people, season) {
    let pricePerPerson = 0;

    if (people <= 5) {
        switch (season) {
            case "spring":
                pricePerPerson = 50;
                break;
            case "summer":
                pricePerPerson = 48.50;
                break;
            case "autumn":
                pricePerPerson = 60;
                break;
            case "winter":
                pricePerPerson = 86;
                break;
        }
    } else {
        switch (season) {
            case "spring":
                pricePerPerson = 48;
                break;
            case "summer":
                pricePerPerson = 45;
                break;
            case "autumn":
                pricePerPerson = 49.50;
                break;
            case "winter":
                pricePerPerson = 85;
                break;
        }
    }

    let total = people * pricePerPerson;

    if (season === "summer") {
        total -= total * 0.15;
    } else if (season === "winter") {
        total += total * 0.08
    }

    console.log(`${total.toFixed(2)} leva.`);
}

excursionCalculator(5, "spring")