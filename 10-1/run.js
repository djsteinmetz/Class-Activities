// Module export for helloworld.js
    // var author = require("./helloworld.js");

    // console.log("--------------------------");
    // console.log(author.dj.name);
    // console.log(author.dj);

var bandsByGenre = require("./bands");

var genre = process.argv[2];

console.log("--------------------------");
switch(genre) {
    case "classic":
        console.log(bandsByGenre.bands.classic);
        break;
    case "indie":
        console.log(bandsByGenre.bands.indie);
        break;
    case "punk":
        console.log(bandsByGenre.bands.punk);
        break;
    case "rap":
        console.log(bandsByGenre.bands.rap);
        break;
}
// console.log(bandsByGenre.bands);
console.log("success");