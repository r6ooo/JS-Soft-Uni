function list(arr) {
    arr.sort((a, b) =>
        a.localeCompare(b))
            .forEach((ele, index) => {
                console.log(`${index + 1}.${ele}`);
            });
}
list(["John", "Bob", "Christina", "Ema"]);
