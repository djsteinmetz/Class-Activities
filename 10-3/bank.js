var fs = require("fs")

fs.readFile("bank.txt", 'utf8', (err, data) => {
    if (err) throw err;
    var data = data.split(",")
    console.log(data);
    // data = parseFloat(data);

    function sum() {
        var sum = 0;
            for (var i = 0; i < data.length; i++) {

                sum += parseFloat(data[i]);

            }
            console.log(sum);
    }
    function deposit() {
        fs.appendFile("bank.txt", ", " + process.argv[3], (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    }
    function withdraw() {
        fs.appendFile("bank.txt", ", -" + process.argv[3], (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    }
    var operator = process.argv[2]
    switch (operator) {
        case "total":
            sum();
            break;
        case "deposit":
            deposit();
            break;

        case "withdraw":
            withdraw();
            break;
    }

});