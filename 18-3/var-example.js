log(name); // output: ? undefinded?

var tinyize = function(name) {
  log(name); // output: ? ricardo

  log(myName); // output: ? undefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: ? pequeño ricardo 

  return myName;
};

var name = tinyize("Rick");
log(name); // output: ? Pequenño Rick
log(myName); // output: ? undefined (out of scope)

log(i); // output: ? undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 5
  }, 100);
}
log(i); // output: ? 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
