function lettersCombinations(arg1, arg2, arg3) {
    let start = arg1.charCodeAt(0);
    let end = arg2.charCodeAt(0);
    let forbidden = arg3.charCodeAt(0);
    let counter = 0;
    let result = "";

    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            for (let third = start; third <= end; third++) {
                if (first !== forbidden && second !== forbidden && third !== forbidden) {
                    counter++;
                    result += `${String.fromCharCode(first)}${String.fromCharCode(second)}${String.fromCharCode(third)} `;
                }
            }
        }
    }
    console.log(`${result}${counter}`);
}
