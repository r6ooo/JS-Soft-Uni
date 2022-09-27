function grandpaStavri(input) {
    let index = 0;
    let countOfDays = Number(input[index]);
    index++;

    let sumOfLitres = 0;
    let sumOfDegrees = 0;
    

    for(let i = 1; i <= countOfDays; i++){
        let litres = Number(input[index]);
        index++;

        let degreases = Number(input[index]);
        index++;

        sumOfLitres += litres;
        sumOfDegrees += litres * degreases;
    

        }

        let degreasesAvr = sumOfDegrees / sumOfLitres;
        console.log(`Liter: ${sumOfLitres.toFixed(2)}`);
        console.log(`Degrees: ${degreasesAvr.toFixed(2)}`);
        if(degreasesAvr < 38) {
            console.log(`Not good, you should baking!`);
        } else if (degreasesAvr >= 38 && degreasesAvr < 42) {
            console.log(`Super!`);
        }else {
            console.log(`Dilution with distilled water!`);
        }
}
grandpaStavri(["2",
"200",
"43",
"200",
"40"])