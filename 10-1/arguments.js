// Create a command line node application that takes in two parameters and outputs whether they are equal or not.
var firstNumber = process.argv[2];
var secondNumber = process.argv[3];
// console.log(firstNumber);
// console.log(secondNumber);

// Longhand version 
    // if(firstNumber===secondNumber) {
    //     console.log('true');
    // } 
    // else {
    //     console.log('false');
    // };

// Shorthand version
console.log(firstNumber===secondNumber);
