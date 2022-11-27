function removeRepeats(arr) {

    let result = [];

    for (const el of arr) {
        if (!result.includes(el)) {
            result.push(el);
        }
    }
    console.log(result.join(' '));
}
removeRepeats([7, 8, 9, 7, 2, 3, 4, 1, 2]);