function footballLeague(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let people = Number(input[index]);
    index++;
    let fan = input[index];
    index++;

    let aSector = 0;
    let bSector = 0;
    let vSector = 0;
    let gSector = 0;
    
    for (let i = 1; i <= people; i++) {
        if (fan === "A") {
            aSector++;
        } else if (fan === "B") {
            bSector++;
        } else if (fan === "V") {
            vSector++;
        } else if (fan === "G") {
            gSector++;
        }

        fan = input[index];
        index++;
    }
    console.log(`${((aSector / people) * 100).toFixed(2)}%`);
    console.log(`${((bSector / people) * 100).toFixed(2)}%`);
    console.log(`${((vSector / people) * 100).toFixed(2)}%`);
    console.log(`${((gSector / people) * 100).toFixed(2)}%`);
    console.log(`${((people / capacity) * 100).toFixed(2)}%`);
}
