function journey(budget, season) {
    let destination = "";
    let cost = 0;
    let type = "";
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            type = "Camp";
            cost = budget * 0.3;
        } else if (season === "winter") {
            type = "Hotel";
            cost = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            type = "Camp";
            cost = budget * 0.4;
        } else if (season === "winter") {
            type = "Hotel";
            cost = budget * 0.8;
        }
    } else {
        destination = "Europe";
        type = "Hotel";
        cost = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${cost.toFixed(2)}`);
}