function carNumber(start, end) {
    let result = "";
    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            for (let third = start; third <= end; third++) {
                for (let forth = start; forth <= end; forth++) {
                    let checkSum = second + third;
                    if (first % 2 === 0 && forth % 2 !== 0 && first > forth && checkSum % 2 === 0) {
                        result += `${first}${second}${third}${forth} `;
                    } else if (forth % 2 === 0 && first % 2 !== 0 && first > forth && checkSum % 2 === 0) {
                        result += `${first}${second}${third}${forth} `;
                    }
                }
            }
        }
    }
    console.log(result);
}
