function cake(input) {
    let width = input[0];
    let length = input[1];
    let cakePieces = width * length
    let index = 2;
    let command = input[index];
    index++;

    while (cakePieces > 0) {
        if (command === "STOP") {
            console.log(`${cakePieces} pieces are left.`);
            break;
        }

        cakePieces -= Number(command);
        command = input[index];
        index++;
    }
    if (cakePieces <= 0) {
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
    }
}