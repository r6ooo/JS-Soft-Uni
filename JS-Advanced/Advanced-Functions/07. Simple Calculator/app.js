function calculator() {
    let num1;
    let num2;
    let res;

    return {
        init: (selector1, selector2, result) => {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            res = document.querySelector(result);
        },
        add: () => (res.value = +num1.value + +num2.value),
        subtract: () => (res.value = +num1.value - +num2.value)
    };
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 