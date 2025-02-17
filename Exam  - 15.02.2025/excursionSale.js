function excursionSale(input) {
    let index = 0;
    let seaTrip = Number(input[index]);
    index++;
    let mountainTrip = Number(input[index]);
    index++;
    let type = input[index];
    index++;

    let totalPackets = Number(seaTrip + mountainTrip);

    let profit = 0;

    while(totalPackets > 0) {

        if (type === "Stop") {
            break;
        }

        if (type == "sea") {
            if (seaTrip <= 0) {
                type = input[index];
                index++;
                continue
            } else {
            seaTrip--;
            totalPackets--;
            profit += 680;
            }
        } else if (type === "mountain") {
            if (mountainTrip <= 0) {
                type = input[index];
                index++;
                continue
            } else {
                mountainTrip--;
                totalPackets--;
                profit += 499;
            }
        }
        type = input[index];
        index++;
    }

    if (totalPackets === 0) {
        console.log("Good job! Everything is sold.");
        console.log(`Profit: ${profit} leva.`);
    } else {
        console.log(`Profit: ${profit} leva.`);
    }
}

excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])