function invalidNumber(number) {
    if (number < 100 || number > 200) {
        if (number === 0) {
            return;
        } else {
            console.log("invalid");
        }
    } else {
        return;
    }
}