function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let type = "";
    let price = 0;

    if (budget <= 100 && budget > 0) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.30;
            type = (`Camp - ${price.toFixed(2)}`);
        } else {
            price = budget * 0.70;
            type = (`Hotel - ${price.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.40;
            type = (`Camp - ${price.toFixed(2)}`);
        } else {
            price = budget * 0.80;
            type = (`Hotel - ${price.toFixed(2)}`);
        }
    }else {
        price = budget * 0.90;
        destination = "Europe";
        type = (`Hotel - ${price.toFixed(2)}`);
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type}`);
    
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
