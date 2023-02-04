function calc() {
    num1 = Number(document.getElementById('num1').value)
    num2 = Number(document.getElementById('num2').value)
    result = document.getElementById('sum');
    sum = num1 + num2;
    result.value = sum;
}
