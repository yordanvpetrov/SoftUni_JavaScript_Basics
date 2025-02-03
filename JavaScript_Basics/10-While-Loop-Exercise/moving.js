function moving(input) {
    let width = input[0];
    let length = input[1];
    let height = input[2];
    let freeSpace = width * length * height;

    let index = 3;
    let command = input[index];
    index++;

    while (freeSpace > 0) {
        if (command === "Done") {
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }

        freeSpace -= Number(command);
        command = input[index];
        index++;
    }
    if (freeSpace <= 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}