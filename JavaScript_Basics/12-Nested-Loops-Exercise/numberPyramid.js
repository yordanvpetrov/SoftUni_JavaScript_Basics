function numberPyramid(num) {
    let counter = 1;
    let isBigger = false;
    let result = "";
    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (counter > num) {
                isBigger = true;
                break;
            }
            result += counter + " ";
            counter++;
        }
        console.log(result);
        result = "";
        if (isBigger) {
            break;
        }
    }
}