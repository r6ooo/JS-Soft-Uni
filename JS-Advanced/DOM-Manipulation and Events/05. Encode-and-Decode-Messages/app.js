function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let encodedMsg ='';
        const input = textAreas[0].value;
        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            encodedMsg += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        textAreas[1].value = encodedMsg;
        textAreas[0].value = '';
    }
    function decode() {
        let decodedMsg = '';
        const input = textAreas[1].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            decodedMsg += String.fromCharCode(element.charCodeAt(0) - 1);
        }
        textAreas[1].value = decodedMsg;
        textAreas[0].value = '';
    }
}