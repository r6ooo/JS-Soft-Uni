function timePlus(input) {
    let hour = Number(input[0]);
    let munutes = Number(input[1]);

    let timeInMin = hour * 60 + munutes;
    let timePlus15 = timeInMin + 15;

    let finalHour = parseInt(timePlus15 / 60);
    let finalMunutes = timePlus15 % 60;

    if (finalHour >= 24){
        finalHour -= 24;
    } 
    if (finalMunutes < 10){
        console.log(`${finalHour}:0${finalMunutes}`);
    } else {
        console.log(`${finalHour}:${finalMunutes}`);
    }
    
}
timePlus(["23", "59"]);