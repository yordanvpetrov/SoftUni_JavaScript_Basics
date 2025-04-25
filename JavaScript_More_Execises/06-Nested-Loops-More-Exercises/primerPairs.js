function primePairs(startFirst, startSecond, diffFirst, diffSecond) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const endFirst = startFirst + diffFirst;
    const endSecond = startSecond + diffSecond;

    for (let first = startFirst; first <= endFirst; first++) {
        for (let second = startSecond; second <= endSecond; second++) {
            if (isPrime(first) && isPrime(second)) {
                console.log(`${first}${second}`);
            }
        }
    }
}

primePairs(10, 20, 5, 5)