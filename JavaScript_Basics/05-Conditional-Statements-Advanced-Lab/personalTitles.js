function personalTitles(age, gender) {
    let title = ""
    switch (gender) {
        case "m":
            if (age < 16) {
                title = "Master"
            } else {
                title = "Mr."
            }
            break;
        case "f":
            if (age < 16) {
                title = "Miss"
            } else {
                title = "Ms."
            }
            break;
    }
    console.log(title);
}