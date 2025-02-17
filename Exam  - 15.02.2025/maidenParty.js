function maidenParty(partyPrice, loveLetter, roses, keychain, drawing, surprise) {
    let totalQty = loveLetter + roses + keychain + drawing + surprise;
    let totalPrice = (loveLetter * 0.60) + (roses * 7.20) + (keychain * 3.60) + (drawing * 18.20) + (surprise * 22);

    if (totalQty > 35) {
        totalPrice -= totalPrice * 0.35;
    }

    totalPrice -= totalPrice * 0.10;

    if (totalPrice >= partyPrice) {
        console.log(`Yes! ${(totalPrice - partyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}

maidenParty(40.8, 20, 25, 30, 50, 10)