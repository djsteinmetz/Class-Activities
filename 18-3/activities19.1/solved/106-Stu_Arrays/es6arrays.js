const soda = ["Pepsi", "Coke"];

const betterSoda = soda.filter((eachSoda) => {
  return eachSoda.startsWith("P");
});

console.log(betterSoda);

const numbers = [12,56,2,1];


function getSum(total, num) {
    return total + Math.round(num);
}

const allNumbers = numbers.reduce(getSum, 0);

console.log(allNumbers);

const menu = [
  { item: "coffee", calories: 10 },
  { item: "fries", calories: 400 },
  { item: "cheeseburger", calories: 700 }
];

menuItems = menu.map((menuItem) => {return menuItem.item});
console.log(menuItems)


menu.forEach(function(menu) {
  console.log(`The ${menu.item} has ${menu.calories} calories`);
});