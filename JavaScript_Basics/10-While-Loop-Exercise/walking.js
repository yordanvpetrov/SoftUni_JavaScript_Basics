function walking(input) {
    let target = 10000;
    let walked = 0;

    let index = 0;
    let action = input[index];
    index++;

    while (walked < target) {
        if (action === "Going home") {
            action = input[index]
            index++;
            walked += Number(action);
            break;
        } else {
            walked += Number(action);
        }
        action = input[index]
        index++;
    }
    if (walked >= target) {
        console.log("Goal reached! Good job!");
        console.log(`${walked - target} steps over the goal!`);
    } else {
        console.log(`${target - walked} more steps to reach goal.`);
    }
}