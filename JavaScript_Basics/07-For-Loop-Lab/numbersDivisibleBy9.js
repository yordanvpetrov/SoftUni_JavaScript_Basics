function numbersDivisibleBy9(start, end) {
    let buffer = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i
            buffer += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buffer);
}