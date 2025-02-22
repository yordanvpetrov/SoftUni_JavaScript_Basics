// Two For Loops solution.

function safePasswordGenerator(a, b, max) {
    let counter = 0;
    let result = "";
    let first = 35;
    let second = 64;

    for (let x = 1; x <= a; x++) {
        if (counter === max) {
            break;
        }
        for (let y = 1; y <= b; y++) {
            if (counter === max) {
                break;
            }
            let = firstChar = String.fromCharCode(first);
            let = secondChar = String.fromCharCode(second);
            result += `${firstChar}${secondChar}${x}${y}${secondChar}${firstChar}|`;
            first++;
            if (first > 55) {
                first = 35;
            }
            second++;
            if (second > 96) {
                second = 64;
            }
            counter++;
        }
    }
    console.log(result);
}
//  Four For Loops solution.
// 
// function safePasswordGenerator(a, b, max) {
//     let counter = 0;
//     let result = "";

//     for (let first = 35; first <= 55; first++) {
//         for (let second = 64; second <= 96; second++) {
//             for (let x = 1; x <= a; x++) {
//                 if (counter === max) {
//                     break;
//                 }
//                 for (let y = 1; y <= b; y++) {
//                     if (counter === max) {
//                         break;
//                     }
//                     result += `${String.fromCharCode(first)}${String.fromCharCode(second)}${x}${y}${String.fromCharCode(second)}${String.fromCharCode(first)}|`;
//                     first++;
//                     if (first > 55) {
//                         first = 35;
//                     }
//                     second++;
//                     if (second > 96) {
//                         second = 64;
//                     }
//                     counter++;
//                 }
//             }
//             break;
//         }
//         break;
//     }
//     console.log(result);
// }
