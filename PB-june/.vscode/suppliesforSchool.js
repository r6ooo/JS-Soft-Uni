function suppliesforSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let discount = Number(input[3]);

    let pricePens = pens * 5.8;
    let priceMarkers = markers * 7.2;
    let priceOfLitres = litres * 1.2;

    let money = pricePens + priceMarkers + priceOfLitres;

    let totalPrice = money - (money * (discount / 100));

    console.log(totalPrice);



}

suppliesforSchool(["2 ",
    "3 ",
    "4 ",
    "25 "]);