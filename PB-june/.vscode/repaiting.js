function repaiting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let priceOfNylon = (nylon + 2) * 1.5;
    let priceOfPaint = (paint + (paint * (10 / 100))) * 14.5;
    let priceOfThiner = thinner * 5;
    let bags = 2 * 0.2;

    let totalPriceMats = priceOfNylon + priceOfPaint + priceOfThiner + bags;
    let priceOfHours = (totalPriceMats * (30 / 100)) * hours;
    let finalPrice = totalPriceMats + priceOfHours;

    console.log(finalPrice);

}
repaiting(["10 ",
"11 ",
"4 ",
"8 "]);