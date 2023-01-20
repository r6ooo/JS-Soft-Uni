function solve(arr) {
    let newArr = [];
    let counter = 1;

    for (let i = 0; i < arr.length; i++) {
        currCommand = arr[i];
        if (currCommand === 'add') {
            newArr.push(counter++);
        } else if (currCommand === 'remove') {
            newArr.pop(counter++);
        }
    }
    if (!newArr.length) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }

}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);