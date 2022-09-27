function hotelRoom(input) {
    let month = input[0];
    let countOfNights = Number(input[1]);
    let apPrice = 0;
    let studioPrice = 0;


    switch (month) {
        case "May":
        case "October":
            if (countOfNights > 7 && countOfNights <= 14) {
                apPrice = countOfNights * 65;
                studioPrice = countOfNights * 50 * 0.95;
            } else if (countOfNights > 14) {
                apPrice = countOfNights * 65 * 0.90;
                studioPrice = countOfNights * 50 * 0.70;
            } else {
                apPrice = countOfNights * 65;
                studioPrice = countOfNights * 50;
            }
            break;
        case "June":
        case "September":
            if (countOfNights > 14) {
                apPrice = countOfNights * 68.70 * 0.90;
                studioPrice = countOfNights * 75.20 * 0.80;
            } else {
                apPrice = countOfNights * 68.70;
                studioPrice = countOfNights * 75.20;
            }
            break;
        case "July":
        case "August":
            if (countOfNights > 14) {
                apPrice = countOfNights * 77 * 0.90;
                studioPrice = countOfNights * 76;
            } else {
                apPrice = countOfNights * 77;
                studioPrice = countOfNights * 76;
            }
            break;
    }

    console.log(`Apartment: ${apPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May",
    "14"])