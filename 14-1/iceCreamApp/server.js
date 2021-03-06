// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var iceCream = [
  {
    name: "vanilla",
    price: 10,
    awesomeness: 3
  }, {
    name: "chocolate",
    price: 4,
    awesomeness: 8
  }, {
    name: "banana",
    price: 2,
    awesomeness: 5
  }
];

// Routes
app.get("/weekday", function(req, res) {
  res.render("index", iceCream[0]);
});

app.get("/weekend", function(req, res) {
  res.render("index", iceCream[1]);
});

app.get("/all", function(req, res) {
  res.render("all-iceCream", {
    ice_cream: iceCream,
    eater: "Dj"
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
