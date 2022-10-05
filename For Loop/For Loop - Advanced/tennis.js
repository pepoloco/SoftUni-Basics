function tennis(input) {

    let tournametsParticipated = Number(input[0]);
    let rankListingStart = Number(input[1]);
    let index = 2;
    let tournamentPart = input[index];



    let totalPointsFromAllTournament = 0;
    let wincounter = 0;

    for (i = 1; i <= tournametsParticipated; i++) {
        tournamentPart = input[index];
        index++;

        if (tournamentPart === "F") {
            totalPointsFromAllTournament += 1200;
        } else if (tournamentPart === "W") {
            wincounter++;
            totalPointsFromAllTournament += 2000;
        } else if (tournamentPart === "SF") {
            totalPointsFromAllTournament += 720;
            switch (rankListingStart) {
                case ("W"): wincounter++; break;
            }


        }
    }
    let totalPointsFromAllTournametPlusRanklisting = totalPointsFromAllTournament + rankListingStart;
    let averagePointsFromAllTournamet = totalPointsFromAllTournament / tournametsParticipated;
    let winPercent = wincounter / tournametsParticipated * 100;


    console.log(`Final points: ${totalPointsFromAllTournametPlusRanklisting}`);
    console.log(`Average points: ${Math.floor(averagePointsFromAllTournamet)}`);
    console.log(`${winPercent.toFixed(2)}%`);

}
tennis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
