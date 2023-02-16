function getFibonator() {
    let num = 1;
    let previous = 0;

    function fib() {
        let fibNumber = num + previous;
        num = previous;
        previous = fibNumber;
        return fibNumber;
    }
    return fib;
}