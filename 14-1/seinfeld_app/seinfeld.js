// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "photoacy?3I",
  database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Routes
  app.get("/", function(req, res) {
  
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    let html = "<h1> SEINFELD APPLICATION </h1>"
    html += "<ul><li>/cast</li><li>/coolness-chart</li><li>/attitude-chart</li>"
    html += "</ul>"
    res.send(html);
  });
  app.get("/cast", function(req, res) {
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors", function(err, result) {
        // code
        let html = "<h1 style='margin-left: 25px; text-decoration: underline'>FULL CAST</h1><ul>"
        for(var i=0; i<result.length; i++) {
            let id = result[i].id;
            let name = result[i].name;
            let coolness_points = result[i].coolness_points;
            let attitude = result[i].attitude;
            html += "<li><p>ID " + id + ": ";
            html += "Name: " + name + "</p>";
            html += "<p>Coolness Points: " + coolness_points + "</p>";
            html += "<p>Attitude: " + attitude + "</p></li>";
            
        }
        html += "</ul>";
        res.send(html);
    });
  });
  app.get("/coolness-chart", function(req, res) {
  
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err, result) {
        let html = "<h1>CHARACTERS SORTED BY COOLNESS</h1>";
        for(var i=0; i<result.length; i++) {
            let id = result[i].id;
            let name = result[i].name;
            let attitude = result[i].attitude;
            let coolness_points = result[i].coolness_points;
            html += "<li><p>ID " + id + ": ";
            html += "Name: " + name + "</p>";
            html += "<p>Attitude: " + attitude + "</p></li>";
            html += "<p>Coolness Points: " + coolness_points + "</p>";
        }
        html += "</ul>";
        res.send(html);
    });
  });
  app.get("/attitude-chart/:att", function(req, res) {
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors WHERE attitude = ?",
        [
            req.params.att
            // attitude
        ], function(err, result) {
        // code 
        let html = "<h1>CHARACTERS WITH THE ATTITUDE " + req.params.att + "</h1>";
        for(var i=0; i<result.length; i++) {
            let id = result[i].id;
            let name = result[i].name;
            let attitude = result[i].attitude;
            html += "<li><p>ID " + id + ": ";
            html += "Name: " + name + "</p>";
            html += "<p>Attitude: " + attitude + "</p></li>";
            
        }
        html += "</ul>";
        res.send(html);
    });
  });
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  