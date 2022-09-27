function godzillaVsKingKong(input) {
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let clothingPriceForOne = Number(input[2]);

    let clothes = statistsCount * clothingPriceForOne;
    let decor = budget * 0.1;


    if (statistsCount > 150) {

        clothes = clothes - (clothes * 0.1);
    }

    totalCost = decor + clothes;
    let amount = Math.abs(budget - totalCost).toFixed(2);

    if (totalCost > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${amount} leva more.`);
    } else if (totalCost <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${amount} leva left.`);
    }




}
godzillaVsKingKong(["15437.62",
"186",
"57.99"])