var calcFunction = process.argv[2];
var number1 = parseInt(process.argv[3]);
var number2 = parseInt(process.argv[4]);


console.log(process.argv[2]);

switch(calcFunction) {
    case "add":
        var result = (number1 + number2);
        // console.log(result);
        break;
    case "subtract":
        var subtraction = (number1 - number2);
        // console.log(result);
        break;
    case "divide": 
        var result = (number1 / number2);
        // console.log(result);
        break;
    case "multiply":
        var result = (number1 * number2);
        // console.log(result);
        break;
    case "remainder":
        var result = (number1 % number2);
        // console.log(result);
        break;
    case "power":
        var result = (number1 ** number2);
        // console.log(result);
        break;
    
}

console.log(result);