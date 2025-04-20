function rectangleOfNxNStars(arg1) {
    let rows = Number(arg1);
    let cols = Number(arg1);

    let result = "";
    for (let first = 1; first <= rows; first++){
        for (let second = 1; second <= cols; second++) {
            result += "*";
        }
        console.log(result);
        result = "";
    }
}
