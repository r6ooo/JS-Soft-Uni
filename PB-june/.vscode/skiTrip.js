function skiTrip(input) {
    let day = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    sum = 0;

    switch (type) {
        case "room for one person": 
            sum = (day - 1) * 18;
        break;
        case "apartment": 
            sum = (day - 1) * 25;
             if (day < 10) {
                sum = sum * 0.70;
             } else if (day >= 10 && day <= 15) {
                sum = sum * 0.65;
             } else {
                sum = sum * 0.50;
             }
        break;
        case "president apartment":
            sum = (day - 1) * 35;
             if (day < 10) {
                sum = sum * 0.90;
             } else if (day >= 10 && day <= 15) {
                sum = sum * 0.85;
             } else {
                sum = sum * 0.80;
             }
        break
    }
    if (grade === "positive") {
        sum = sum * 1.25;
    }  else {
        sum = sum * 0.90
    }
   
    console.log(sum.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"])