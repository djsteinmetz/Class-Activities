var animal = { name: "Mr. Pants", type: "Bad Kitty" };

// ES5
var name = animal.name; 
var type = animal.type;

console.log(name); // Mr. Pants
console.log(type); // Bad Kitty

// ES6 - Destructuring
var { animal, type } = animal;

console.log(name); // Mr. Pants
console.log(type); // Bad Kitty

// ----- Array Destructuring ------
var animals = ["Fish", "Bear", "Cat", "Dog", "Mantis Shrimp"];
// ES5
var first = animals[0]; // Fish
var second = animals[1]; // Bear
var others = animals.slice(2); // ['Cat', 'Dog', 'Mantis Shrimp']

animals = [...animals, "Lion"];

// ES6 - Array destructuring also using `...` rest pattern
var [first, second, ...others] = animals;

console.log(first); // Fish
console.log(second); // Bear
console.log(others); // [['Cat', 'Dog', 'Mantis Shrimp']