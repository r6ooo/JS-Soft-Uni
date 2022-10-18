function receipt(input) {

    let priceWithoutTaxes = 0;
    let taxes = 0;
    let clientType = '';
    inputLength = input.length

    for (let i = 0; i < inputLength; i++) {

        clientType = input[i];
        let currentPrice = Number(input[i]);

        if (currentPrice > 0) {
            priceWithoutTaxes += currentPrice;
        }
        if (currentPrice <= 0) {
            console.log("Invalid price!");
        }
        if (clientType === 'special' || clientType === 'regular') {
            break;
        }
    }

    taxes = priceWithoutTaxes * 0.2;
    let totalPrice = priceWithoutTaxes + taxes;

    if (priceWithoutTaxes === 0) {
        console.log('Invalid order!');
    } else {
        if (clientType === 'special') {
            totalPrice = totalPrice - (totalPrice * 0.1);
        }

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
receipt(['regular']);