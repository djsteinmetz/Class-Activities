var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "photoacy?3I",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    allSongsAndAlbums();
});

function allSongsAndAlbums() {
    inquirer.prompt([
        {
            name: "artist",
            type: "input",
            message: "Which artist would you like to search?"
        }
    ]).then(function (answers) {
        // something
        let choice = answers.artist;
        var query = connection.query(
            "SELECT * FROM top5000 JOIN top5000_albums ON top5000.artist = top5000_albums.artist WHERE top5000.artist LIKE ?",
            "%" + choice + "%",
        function (err, res) {
            console.log(res);
            connection.end();
        });
    });
};

// function printSongs(res) {
//     for (var i = 0; i < res.length; i++) {
//         console.log("#" + res[i].position + ": " + res[i].song);
//     };
//     console.log("--------- " + res.length + " songs ---------")
// };