function backToThePast(heritage, yearToLive) {
    let moneyLeft = heritage;
    let age = 18;
    for (let i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            moneyLeft -= 12000;
        } else {
            moneyLeft -= 12000 + 50 * age;
        }
        age++;
    }

    if (moneyLeft >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(moneyLeft).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(50000, 1802)