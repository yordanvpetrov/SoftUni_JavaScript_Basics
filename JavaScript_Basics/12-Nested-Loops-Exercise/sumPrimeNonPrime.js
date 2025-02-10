function sumPrimeNonPrime(input) {
    let index = 0;
    let checkNumber = input[index];
    index++;

    let sumPrime = 0;
    let sumNonPrime = 0;

    while (checkNumber !== "stop") {
        let isPrime = false;
        let currentNum = Number(checkNumber);
        if (Number(currentNum) < 0) {
            console.log(`Number is negative.`);
            checkNumber = input[index];
            index++;
            continue;
        }

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = true;
            }
        }
        if (!isPrime) {
            sumPrime += currentNum;
        } else {
            sumNonPrime += currentNum;
        }
        checkNumber = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}