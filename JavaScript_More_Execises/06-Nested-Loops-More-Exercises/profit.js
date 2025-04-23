function profit(arg1, arg2, arg3, arg4) {
    let oneCoinQty = arg1;
    let twoCoinQty = arg2;
    let fiveCoinQty = arg3;
    let totalSum = arg4;

    result = "";

    for (let oneLev = 0; oneLev <= oneCoinQty; oneLev++) {
        for (let twoLev = 0; twoLev <= twoCoinQty; twoLev++){
            for (let fiveLev = 0; fiveLev <= fiveCoinQty; fiveLev++){
                let currentSum = oneLev * 1 + twoLev * 2 + fiveLev * 5;
                if (currentSum === totalSum) {
                    result += `${oneLev} * 1 lv. + ${twoLev} * 2 lv. + ${fiveLev} * 5 lv. = ${totalSum} lv.\n`
                }
            }
        }
    }
    console.log(result);
}
