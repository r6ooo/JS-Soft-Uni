function solve(arr) {
    let heroes = [];

    for (const el of arr) {
        let [name, level, items]= el.split(' / ');
        level= Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({name, level, items});
    }
    console.log(JSON.stringify(heroes));
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

solve(['Jake / 1000 / Gauss, HolidayGrenade'])
n