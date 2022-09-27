function worldSwimingRecord(input) {
    let curentRecord = Number(input[0]);
    let distanceInM = Number(input[1]);
    let swimingTimeForOneM = Number(input[2]);

    let time = distanceInM * swimingTimeForOneM;
    let slowTime = Math.floor(distanceInM / 15);
    time = time + (slowTime * 12.5);
    if (time < curentRecord) {
        console.log(` Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        let diff = time - curentRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
worldSwimingRecord(["55555.67",
"3017",
"5.03"])