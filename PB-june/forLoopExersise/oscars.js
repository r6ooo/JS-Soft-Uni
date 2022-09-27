function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let pointsOfAcademy = Number(input[index]);
    index++;
    let countOfJury = input[index];
    index++;

    let hasNominee = false;

    for (let i = 0; i < countOfJury; i++) {
        let currentName = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;

        let totalPoints = currentName.length * currentPoints / 2;
        pointsOfAcademy += totalPoints

        if (pointsOfAcademy > 1250.5) {
            hasNominee = true;
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsOfAcademy.toFixed(1)}!`);
            break;
        }

    }
    
    let diff = Math.abs(pointsOfAcademy - 1250.5);
    if (!hasNominee) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
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

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])