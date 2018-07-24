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
    inquire();
});

function inquire() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "Do you want to search a song or view songs?",
            choices: ["SEARCH A SONG", "VIEW SONGS"]
        }
    ]).then(function (answers) {
        // something
        let choice = answers.command;
        switch (choice) {
            case "VIEW SONGS":
                inquirer.prompt([
                    {
                        name: "command",
                        type: "list",
                        message: "Which search would you like to view?",
                        choices: ["How many top songs were there for a specific year?", "How many top songs were by a specific artist"]
                    }
                ]).then(function (answers) {
                    // something
                    let choice = answers.command;
                    switch (choice) {
                        case "How many top songs were there for a specific year?":
                            songsByYear();
                            break;
                        case "How many top songs were by a specific artist":
                            searchArtist();
                            break;
                    }
                });
            case "SEARCH A SONG":
            inquirer.prompt([
                {
                    name: "song",
                    type: "input",
                    message: "Which song would you like to search?"
                }
            ]).then(function (answers) {
                // something
                let song = answers.song;
                searchSong(song);
            });
        }
    });
};
function songsByYear() {
    inquirer.prompt([
        {
            name: "year",
            type: "input",
            message: "Which year would you like to search?"
        }
    ]).then(function (answers) {
        // something
        let choice = answers.year;
        var query = connection.query(
            "SELECT * FROM top5000 WHERE year = ?",
            choice,
        function (err, res) {
            printSongs(res);
            connection.end();
        });
    });
};

function searchArtist() {
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
            "SELECT * FROM top5000 WHERE artist LIKE ?",
            "%" + choice + "%",
        function (err, res) {
            printSongs(res);
            connection.end();
        });
    });
};

function searchSong(song) {
    var query = connection.query(
        "SELECT * FROM top5000 WHERE song LIKE ?",
        "%" + song + "%",
    function (err, res) {
        printSongs(res);
        connection.end();
    });
}

function printSongs(res) {
    for (var i = 0; i < res.length; i++) {
        console.log("#" + res[i].position + ": " + res[i].song);
    };
    console.log("--------- " + res.length + " songs ---------")
};