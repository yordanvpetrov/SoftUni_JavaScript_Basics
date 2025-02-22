function secretDoorsLock(a, b, c) {
    let prime = false;
    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            for (let z = 1; z <= c; z++) {
                if (x % 2 === 0 && z % 2 === 0) {
                    if (y === 2 || y === 3 || y === 5 || y === 7) {
                        console.log(`${x} ${y} ${z}`);
                    }
                }
            }
        }
    }
}
