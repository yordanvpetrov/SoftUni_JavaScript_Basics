function trainTheTrainers(input) {
    let index = 0;
    let judge = input[index];
    index++;
    let presentationName = input[index];
    index++;

    let presentations = 0;
    let sumGrade = 0;
    let currentAverage = 0;
    let averageGrade = 0;

    while (presentationName !== "Finish") {
        for (let i = 1; i <= judge; i++) {
            sumGrade += Number(input[index]);
            index++;
        }
        
        currentAverage = sumGrade / judge;
        averageGrade += currentAverage;
        console.log(`${presentationName} - ${currentAverage.toFixed(2)}.`);
        
        presentationName = input[index];
        index++;
        sumGrade = 0;
        presentations++;
    }
    console.log(`Student's final assessment is ${(averageGrade / presentations).toFixed(2)}.`);
}