function yardGreening(input){
   let squareMeterPrice = 7.61;
   let totalSquares = Number(input[0]);
   let totalPrice = totalSquares *squareMeterPrice;
   let discountOfTotal = 18;
    let finalPrice = totalPrice - (totalPrice * (discountOfTotal / 100));
    let discount = totalPrice * (discountOfTotal / 100);
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"]);