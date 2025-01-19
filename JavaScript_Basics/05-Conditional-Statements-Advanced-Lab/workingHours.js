function workingHours(hour, day) {
    switch (day) {
        case "Sunday":
            console.log("closed");
            break;
        default:
            if (hour < 10 || hour > 18) {
                console.log("closed");
                return;
            } else {
                console.log("open");
                return;
            }
    }
}