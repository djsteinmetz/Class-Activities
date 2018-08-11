// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var moment = require("moment");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", function (req, res) {
    var dbQuery = "SELECT * FROM chirps"
    connection.query(dbQuery, function (err, data) {
      if (err) throw err;
      console.log(data);
      console.log("Displayed Data");
      res.send(data);
    });

  });

  app.post("/api/new", function (req, res) {
    console.log("Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO chirps(author, chirp, time_created) VALUES (?,?, ?)";

    connection.query(dbQuery, [req.body.author, req.body.chirp, req.body.time_created], function (err, result) {
      if (err) throw err;
      console.log("Inserted Data");
      res.end();
    });
  });
  // Add a chirp


};
