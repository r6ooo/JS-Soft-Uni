function barcodeChecker(input) {

    let countOfBarcodes = Number(input.shift());
    let patternCode = /@#+[A-Z][a-zA-Z\d]{4,}[A-Z]@#+/;
    let patternDigit = /\d/g;
    let codeForCheck = input.shift();

    while (countOfBarcodes > 0) {
        if(patternCode.test(codeForCheck)){
            let productGroup = (codeForCheck.match(patternDigit) || ['0', '0']).join('');
            console.log(`Product group: ${productGroup}`);
        }else{
            console.log("Invalid barcode");
        }
        countOfBarcodes--;
        codeForCheck = input.shift();
    }
}
barcodeChecker(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
    barcodeChecker(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);