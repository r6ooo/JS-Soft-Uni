function hashTag(string) {

    const words = string.split(' ');
    const validWords = [];

    words.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;
        if (isValidWord) {
            let isLetter = true;
            let wordCopy = '';
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[i];
                }
            }
            if(isLetter){
                console.log(wordCopy);
            }
        }
    });
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');