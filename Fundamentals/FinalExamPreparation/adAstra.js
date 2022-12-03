function spaceFood(input) {

    let text = input.shift();
    let pattern = /(#|\|)(?<name>[A-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
    const kcalPerDay = 2000;
    let foods = [];
    let sumCalories =0;
    let regex = pattern.exec(text);

    while(regex){
        foods.push({name:regex[2],expDate:regex[3],kcal:regex[4]});
        sumCalories += Number(regex[4]);

        regex = pattern.exec(text);
    }
    let daysHaveFood = Math.floor(sumCalories/kcalPerDay);
    console.log(`You have food to last you for: ${daysHaveFood} days!`);
    for (let i=0;i<foods.length; i++) {
        console.log(`Item: ${foods[i].name}, Best before: ${foods[i].expDate}, Nutrition: ${foods[i].kcal}`);
    }

}
spaceFood([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
    spaceFood([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
    spaceFood(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);