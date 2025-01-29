function salary(arr) {
    let openTabs = arr[0];
    let salary = arr[1];
    for (let i = 2; i <= openTabs + 1; i++) {
        let checkTab = arr[i];

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        } else if (checkTab === "Facebook") {
            salary -= 150;
        } else if (checkTab === "Instagram") {
            salary -= 100;
        } else if (checkTab === "Reddit") {
            salary -= 50;
        } else {
            continue;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}