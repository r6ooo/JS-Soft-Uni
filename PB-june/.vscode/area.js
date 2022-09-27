function solve (side){
   let area = side * side;
   console.log(area);
   console.log('Rounded UP: ' + Math.ceil(area));
   console.log('Rounded Down: ' + Math.floor(area));
   console.log(' Fixed: ' + area.toFixed(2));
}
solve(2.56);