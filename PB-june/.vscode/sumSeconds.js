function sumSeconds(input){
    let timeA = Number(input[0]);
    let timeB = Number(input[1]);
    let timeC = Number(input[2]);

    let sumInSeconds = timeA + timeB + timeC ;
    let timeInMinutes = Math.floor(sumInSeconds / 60);
    let timeInSeconds = sumInSeconds % 60;
    if (timeInSeconds < 10){
        console.log(`${timeInMinutes}:0${timeInSeconds}`);
    } else {
        console.log(`${timeInMinutes}:${timeInSeconds}`);
    }

}
sumSeconds(["35",
    "45",
    "44"]);