function examPreparation(input) {
    let grades = 0;
    let gradeNumbers = 0;
    let badGradesCounter = 0;
    let solvedProblems = 0;
    let index = 0;
    let maxBadGradesAllowed = Number(input[index]);
    index++;
    let problemName = input[index];
    index++;
    let problemGrade = Number(input[index]);
    index++;

    while (problemName !== "Enough") {
        solvedProblems++;
        grades += problemGrade;
        gradeNumbers++;
        
        if (problemGrade <= 4) {
            badGradesCounter++;
            if (badGradesCounter >= maxBadGradesAllowed) {
                console.log(`You need a break, ${badGradesCounter} poor grades.`);
                break;
            }
        }
        problemName = input[index];
        index++;
        problemGrade = Number(input[index]);
        index++;
    }
    if (problemName === "Enough") {
        console.log(`Average score: ${(grades / gradeNumbers).toFixed(2)}`);
        console.log(`Number of problems: ${solvedProblems}`);
        console.log(`Last problem: ${input[index - 4]}`);
    }
}