const http = require("http");
const fs = require("fs");
// Positive Server
const PORTpos = 7000;
const serverPos = http.createServer(handleRequestPos);
serverPos.listen (PORTpos, function() {
    console.log("server is listening on http://localhost PORT:" + PORTpos)
});
function handleRequestPos(req, res) {
    fs.readFile(__dirname + "/portfolio.html", function(err, data) {
        res.writeHead(
            200, {"Content-Type": "text/html" })
        res.end(data);
    });
};
// Negative Server
const PORTneg = 7500;
function handleRequestNeg(req, res) {
    let negativePhrase = ["You could be prettier", "You could be more kind", "You could be more smart", "You could be more generous"];
    let randomIndex = Math.floor(Math.random() * negativePhrase.length);
    res.end("Negative: " + negativePhrase[randomIndex] + " | Client origin: " + req.url);
}
const serverNeg = http.createServer(handleRequestNeg);
serverNeg.listen (PORTneg, function() {
    console.log("server is listening on http://localhost PORT:" + PORTneg)
});

