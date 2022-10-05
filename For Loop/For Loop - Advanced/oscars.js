function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;

    let pointsFromAcademy = Number(input[index]);
    index++;

    let judgesCount = Number(input[index]);
    index++;

    for (let i = 1; i <= judgesCount; i++) {
        let nameOfJudge = input[index];
        index++;

        let currentPointsOfJudge = Number(input[index]);
        index++;

        let actorsPoints = nameOfJudge.length * (currentPointsOfJudge / 2);
        pointsFromAcademy += actorsPoints;

        if (pointsFromAcademy > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            break;
        }
    }
    let difference = Math.abs(pointsFromAcademy - 1250.5);
    if (pointsFromAcademy <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
