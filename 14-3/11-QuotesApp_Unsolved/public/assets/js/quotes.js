// Make sure we wait to attach our handlers until the DOM is fully loaded.
var quotes = [
  $(function () {
    $("button").on("click", function (event) {
      event.preventDefault();
      console.log("Button Click")
    })
    // jQuery event handlers should go here.
    // Post route -> back to home
    app.post("/", function (req, res) {
      // Test it
      console.log('You sent, ' + req.body.task);

      // Test it
      // return res.send('You sent, ' + req.body.task);

      // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
      // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
      // https://en.wikipedia.org/wiki/SQL_injection
      connection.query("INSERT INTO quotes (quote) VALUES (?)", [req.body.quote], function (err, result) {
        if (err) throw err;

        res.redirect("/");
      });
    });

    app.post("/delete", function (req, res) {
      // Test it
      console.log('You sent, ' + req.body.id);

      // Test it
      // return res.send('You sent, ' + req.body.task);

      // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
      // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
      // https://en.wikipedia.org/wiki/SQL_injection
      connection.query("DELETE FROM tasks WHERE id = ?", [req.body.id], function (err, result) {
        if (err) throw err;

        res.redirect("/");
      });
    });
  })
]
module.export(quotes);