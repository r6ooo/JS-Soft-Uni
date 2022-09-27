function areaOfFigures(input){
    let name = input[0];
    let number1 = Number(input[1]);
    let number2 = Number(input[2]);
 
    if(name === 'square'){
        let square = number1 * number1;
        console.log(square.toFixed(3));
    }
    else if(name === 'rectangle'){
        let rectangle = number1 * number2;
        console.log(rectangle.toFixed(3));
    }
    else if(name === 'circle'){
        let circle = (number1 * number1) * Math.PI;
        console.log(circle.toFixed(3));
    }
    else if(name === 'triangle'){
        let triangle = (number1 * number2) / 2;
        console.log(triangle.toFixed(3));
    }

}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle",
"7",
"2.5"]);
areaOfFigures(["circle",
"6"]);
areaOfFigures(["triangle",
"4.5",
"20"]);