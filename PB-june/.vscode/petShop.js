function petShop(input){
   let dogsFoodPrice = 2.5;
   let catsFoodPrice = 4;
   let dogsFoodCout = Number(input[0]);
   let catsFoodCount = Number(input[1]);

   let charge = (dogsFoodCout * dogsFoodPrice) + (catsFoodCount * catsFoodPrice);
   console.log(`${charge} lv.`)
}

petShop(["5 ",
         "4 "]);