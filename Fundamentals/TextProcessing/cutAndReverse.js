function cutAndReverse(input) {

    const middle = input.length / 2;

    const firstPart = input
        .substring(0, middle)
        .split('')
        .reverse()
        .join('');

    const secondPart = input
        .substring(middle)
        .split('')
        .reverse()
        .join('');

    console.log(`${firstPart}\n${secondPart}`);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');