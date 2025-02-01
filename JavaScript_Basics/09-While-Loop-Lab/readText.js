function readText(arr) {
    let index = 0;
    let text = arr[index]
    index++;

    while (text !== "Stop") {
        console.log(text);
        text = arr[index]
        index++;
    }
}