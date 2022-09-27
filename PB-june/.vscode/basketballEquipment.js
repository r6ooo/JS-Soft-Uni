function basketballEquipment(input){

    let anumTax = Number(input[0]);
    let sneakersPrice = anumTax - (anumTax * 40 /100);
    let outfitPrice = sneakersPrice - (sneakersPrice * 20 / 100);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice/ 5;

    let result = anumTax + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(result);
}
basketballEquipment(["365"]);