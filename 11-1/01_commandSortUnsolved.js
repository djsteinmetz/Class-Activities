// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var input = process.argv
function sortNumber(a,b) {
    return a - b;
}
var numArray = [];
for (var i = 2; i<input.length; i++) {
    numArray.push(parseInt(input[i]));
}
numArray.sort(sortNumber);
console.log("SORTED NUMBERS: " + numArray.join(","));