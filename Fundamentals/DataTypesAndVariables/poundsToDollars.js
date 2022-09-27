function converter(pounds) {
    let poundValue = 1.31;
    let poundsToDollars = pounds * poundValue;

    console.log(poundsToDollars.toFixed(3));
}
converter(80);