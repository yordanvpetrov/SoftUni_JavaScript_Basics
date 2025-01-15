function basketballEquipment(annualTax) {
    let basketballTrainers = annualTax * 0.6;
    let basketballClothes = basketballTrainers * 0.8;
    let basketballBall = basketballClothes * 0.25;
    let basketballAccessories = basketballBall * 0.2;
    let totalSum = annualTax + basketballTrainers + basketballClothes + basketballBall + basketballAccessories;
    console.log(totalSum);
    
}