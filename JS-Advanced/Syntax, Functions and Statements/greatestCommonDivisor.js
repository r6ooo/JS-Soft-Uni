function gcd(a, b) {
    a = Number(a);
    b = Number(b);
    let oldDivisor = 1;
    let newDivisor = 1;
    let smaller = Math.min(a, b);
    for (let i = oldDivisor; i <= smaller; i++) {
        if (a % i == 0 && b % i == 0) {
            newDivisor = i;
        }

    }
    if (newDivisor >= oldDivisor) {
        console.log(newDivisor);
    }

}
gcd(15, 5)
gcd(2154, 458)