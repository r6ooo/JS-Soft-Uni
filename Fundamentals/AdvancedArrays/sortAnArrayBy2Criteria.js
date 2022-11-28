function sortArr(arr) {

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedArr.join('\n'));

}
sortArr(['alpha', 'beta', 'gamma']);
sortArr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);