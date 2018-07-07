var fs = require("fs");

fs.readFile('best_things_ever.txt', 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split(",");
    console.log(data);
    for(var i=0; i<data.length; i++) {
        console.log(data[i]);
    }
});
