function graduation(input) {
    let index = 0;
    let studentName = input[index];
    index++;
    let grade = input[index];
    index++;
    let badCounter = 0;
    let sumGrades = 0;
    let currentClass = 0;
    while (currentClass < 12) {
        if (Number(grade) >= 4) {
            sumGrades += Number(grade);
            currentClass++;
        } else {
            badCounter++;
            if (badCounter === 2) {
                console.log(`${studentName} has been excluded at ${currentClass + 1} grade`);
                break;
            }
        }
        grade = input[index];
        index++;
    }
    if (badCounter < 2) {
        console.log(`${studentName} graduated. Average grade: ${(sumGrades / currentClass).toFixed(2)}`);
    }
}