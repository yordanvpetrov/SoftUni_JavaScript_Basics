function combinations(number) {
    let combinations = 0;
    for (let x = 0; x <= Number(number); x++) {
        for (let y = 0; y <= Number(number); y++) {
            for (let z = 0; z <= Number(number); z++) {
                let result = x + y + z;
                if (result === number) {
                    combinations++;
                }
            }
        }
    }
    console.log(combinations);
}