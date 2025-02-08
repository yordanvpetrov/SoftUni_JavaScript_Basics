function building(arg1, arg2) {
    let floors = Number(arg1);
    let rooms = Number(arg2);

    for (let f = floors; f > 0; f--) {
        let buff = "";
        for (let r = 0; r < rooms; r++) {
            if (f === floors) {
                buff += `L${f}${r} `
            } else if (f % 2 === 0) {
                buff += `O${f}${r} `
            } else {
                buff += `A${f}${r} `
            }
        }
        console.log(buff);
    }
}