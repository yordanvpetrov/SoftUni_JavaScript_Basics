function grades(input) {
    let students = Number(input[0]);
    let index = 1;
    let grade = Number(input[index]);
    index++;

    let topStudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let fail = 0;
    let average = 0;

    for (let i = 1; i <= students; i++) {
        if (grade >= 5) {
            topStudents += 1;
        } else if (grade >= 4) {
            between4and5 += 1;
        } else if (grade >= 3) {
            between3and4 += 1;
        } else {
            fail += 1;
        }
        average += grade;
        grade = Number(input[index]);
        index++;
    }
    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4and5 / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3and4 / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${(average / students).toFixed(2)}`);
}