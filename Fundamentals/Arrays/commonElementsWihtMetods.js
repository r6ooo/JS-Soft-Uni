function demo(firstArr, secondArr) {
    for (let element of firstArr) {
        if (secondArr.includes(element)) {
            console.log(element);
        }
    }

}
demo(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);