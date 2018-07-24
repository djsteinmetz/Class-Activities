var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "photoacy?3I",
    database: "great_bayDB"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function start() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "Do you want to post or bid?",
            choices: ["POST AN ITEM", "BID ON AN ITEM"]
        }
    ]).then(function (answers) {
        // console.log(answers)
        var command = answers.command;
        console.log(command);
        // console.log("'POST AN ITEM' or 'BID ON AN ITEM'")
        switch (command) {
            case "POST AN ITEM":
                // postitem()
                console.log("I WANT TO POST AN ITEM")
                inquirer.prompt([
                    {
                        name: "item",
                        message: "What item would you like to post?"
                    }, {
                        name: "user",
                        message: "What is your name?"
                    }, {
                        name: "starting_bid",
                        message: "What would you like the starting bid on your item?"
                    }
                ]).then(function (answers) {
                    // Insert code here to insert the item to the DB
                    var item = answers.item;
                    var user = answers.user;
                    var startingBid = parseFloat(answers.starting_bid);
                    console.log(user + "'s " + item + " will start at $" + startingBid);
                    // connection.end();
                    createProduct(item, startingBid, user);
                });
                break;
            case "BID ON AN ITEM":
                // biditem()
                console.log("I WANT TO BID ON AN ITEM")
                // Code here to display the itmes
                readProducts();
                // Code here to prompt user to bid on item via item id
                break;
        }
        // connection.end();
    });
};

function createProduct(item, starting_bid, bidder) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO for_auction SET ?",
        {
            item: item,
            starting_bid: starting_bid,
            bidder: bidder
        },
        function (err, res) {
            // console.log(res.affectedRows + " product inserted!\n");
            readProducts();
        }
    );
};

function readProducts() {
    console.log("Here are the items up for auction...\n");
    connection.query("SELECT * FROM for_auction", function (err, data) {
        if (err) throw err;
        console.log(data[0].item);
        connection.end();
    });
};