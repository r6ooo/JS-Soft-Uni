function target(input) {

    let targetField = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line !== 'End') {

        let [command, index, power] = line.split(' ');
        switch (command) {
            case 'Shoot':
                shoot(index, power);
                break;
            case 'Add':
                add(index, power);
                break;
            case 'Strike':
                strike(index, power);
                break;
        }
        line = input.shift();
    }

    console.log(targetField.join('|'));

    function shoot(index, power) {
        index = Number(index);
        power = Number(power);

        if (index >= 0 && index < targetField.length) {
            targetField[index] -= power;
            if (targetField[index] <= 0) {
                targetField.splice(index, 1);
            }
        }
    }

    function add(index, powerToAdd) {
        index = Number(index);
        power = Number(powerToAdd);
        if (index >= 0 && index < targetField.length) {
            targetField[index] += powerToAdd;
        } else {
            console.log('Invalid placement!');
        }
    }

    function strike(index, power) {
        index = Number(index);
        power = Number(power);
        if (index >= 0 && index < targetField.length) {
            if (index - power >= 0 && index + power < targetField.length) {
                targetField.splice(index - power, index + power);
            } else {
                console.log('Strike missed!');
            }
        }
    }
}
target(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
target(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);