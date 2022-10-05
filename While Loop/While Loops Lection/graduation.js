function graduation(input) {

    let averageGrade = 0;
    let index = 0;
    let studentName = input[index];
    index++;
    let excluded = 0;
    let grade = 1;
    let sumOfGrades = 0;

    while (grade <= 12) {
        let grades = Number(input[index]);
        index++;
        if (grades >= 4.00) {
            grade++;
            sumOfGrades += grades;
        } else {
            excluded++;
            if (excluded > 1) {
                console.log(`${studentName} has been excluded at ${grade} grade`);
                break;
            }

        }
        averageGrade = sumOfGrades / 12;
    }
    if (excluded <= 1) {
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);
