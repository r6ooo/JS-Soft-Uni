function bomb(array, bombArr) {
    let [bomb, power] = bombArr;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === bomb) {
            let index;
            let powerWeigth;
            let countEl = 0;

            if (i - power < 0) {
                index = 0
                powerWeigth = 1
                countEl = i;

            } else {
                index = i - power
                powerWeigth = 2
            }

            array.splice(index, ((power * powerWeigth) + countEl) + 1);
            i-=2;
        }
    }

    for (const el of array) {
        sum += el;
    }

    console.log(sum);
}

bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);