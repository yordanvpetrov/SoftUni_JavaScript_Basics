function weddingSeats(sectorL, rowsEnd, seatsEnd) {
    let index = 0;
    let sectorEnd = sectorL.charCodeAt(0);
    let totalSeats = 0;


    for (let sector = 65; sector <= sectorEnd; sector++) {
        for (let rows = 1; rows <= rowsEnd; rows++) {
                if (rows % 2 === 0) {
                    for (let seats = 0; seats < seatsEnd + 2; seats++) {
                    console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(97 + seats)}`);
                    totalSeats++;
                    }
                } else {
                    for (let seats = 0; seats < seatsEnd; seats++) {
                    console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(97 + seats)}`);
                    totalSeats++;
                    }
                }
        }
        rowsEnd++;
    }
    console.log(totalSeats);
}
