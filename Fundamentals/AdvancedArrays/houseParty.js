function guestsList(input) {

    let guests = [];
    for (const line of input) {
        let command = line.split(' ');
        let name = command[0];
        if (command.length === 3) {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            }
        }
    }
    console.log(guests.join('\n'));
}
guestsList([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
guestsList(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);