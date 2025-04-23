function happyCatParking(arg1, arg2) {
    let totalDays = arg1;
    let totalHours = arg2;

    let totalSum = 0;

    for (let day = 1; day <= totalDays; day++) {
        let currentDay = 0;
        for (let hour = 1; hour <= totalHours; hour++) {
            if (day % 2 === 0 && hour % 2 !== 0) {
                currentDay += 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                currentDay += 1.25;
            } else {
                currentDay += 1;
            }
        }
        console.log(`Day: ${day} - ${(currentDay).toFixed(2)} leva`);
        totalSum += currentDay;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
