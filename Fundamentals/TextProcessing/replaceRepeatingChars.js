function replaceRepeating(text) {

    let result = text[0];

    for (let i = 1; i < text.length; i++) {
        const current = text[i];
        const prev = text[i - 1];
        if (current !== prev) {
            result += current;
        }
    }
    console.log(result);
}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');