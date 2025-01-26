function sumOfNumbers(arg1) {
    let numbers = String(arg1);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers.charAt(i))
    }
    console.log(`The sum of the digits is:${sum}`);
}