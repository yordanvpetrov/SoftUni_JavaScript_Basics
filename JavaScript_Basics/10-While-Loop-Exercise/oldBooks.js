function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let book = input[index];
    index++;
    let checked = 0;
    while (book !== "No More Books") {
        if (book === favoriteBook) {
            console.log(`You checked ${checked} books and found it.`);
            break;
        }
        book = input[index];
        index++;
        checked++;
    }
    if (book === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checked} books.`);
    }
}
