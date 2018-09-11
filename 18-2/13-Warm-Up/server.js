// Your assignment is to define the routes below. Good luck!

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Configure our app for morgan and body parser
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Static file support with public folder
app.use(express.static("public"));

// Mongojs configuration
var databaseUrl = "warmup";
var collections = ["books"];

// Hook our mongojs config to the db var
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post("/submit", function(req, res) {
  // Save the request body as an object called book
  var book = req.body;

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false;
  db.book.save(book, function(error, saved) {
    // show any errors
    if(error) {
      console.log(error);
    }
    else {
      // Otherwise, send the response to the client (for AJAX success function)
      res.send(saved);
    }
  });
});

// Find all books marked as read
app.get("/read", function(req, res) {
  db.book.find({"read":true}, function(error, found) {
    if(error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

// Find all books marked as unread
app.get("/unread", function(req, res) {
  db.book.find({"read":false}, function(error, found) {
    if(error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

// Mark a book as having been read
app.get("/markread/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  db.book.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        "read": true
      }
    }, function(error, edited) {
    if(error) {
      console.log(error);
    }
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});

// Mark a book as having been not read
app.get("/markunread/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  db.book.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        "read": false
      }
    }, function(error, edited) {
    if(error) {
      console.log(error);
    }
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
