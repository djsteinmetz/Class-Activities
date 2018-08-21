// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// Routes
// =============================================================
var db = require("../models");
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    console.log(req.body);
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(result) {
      res.json(result);
    })
    
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // console.log(req.)
    console.log(req.body);
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    console.log(req.body);
    db.Todo.update({
        text: req.body.text,
        complete: req.body.complete
    }, {
      where: {
        id: req.body.id,
      }
    });
  });
};
