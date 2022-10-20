function bonusScoringSys(input) {

    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let addBonus = Number(input.shift());

    let maxAttendance = 0;
    let maxBonus = 0;

    for (let i = 0; i < students; i++) {

        let attendance = Number(input[i]);
        let bonus = (attendance / lectures) * (5 + addBonus);
        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAttendance = attendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(maxAttendance)} lectures.`);
}
bonusScoringSys(['5', '25', '30',
    '12', '19', '24',
    '16', '20'])