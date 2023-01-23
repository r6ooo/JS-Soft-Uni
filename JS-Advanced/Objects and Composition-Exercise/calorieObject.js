function composer(arr) {
    return arr.reduce((acc, curr, index) => {
        if (index % 2 === 0) acc[curr] = Number(arr[index + 1])
        return acc;
    }, {})
}
console.log(composer(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))