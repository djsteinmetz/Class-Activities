var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);
var fs = require("fs");

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(path, req, res);

        case "/favorite-foods":
            return displayFoods(path, req, res);

        case "/favorite-movies":
            return displayMovies(path, req, res);

        case "/favorite-css-frameworks":
            return displayFavFrameworks(path, req, res);

        default:
            return display404(path, req, res);
    }
}
// Template function
function readRequest(file, contentType, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + file, function (err, data) {
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    });
}
function displayRoot(url, req, res) {
    readRequest("/home.html", "text/html", res);
};
function displayFoods(url, req, res) {
    readRequest("/favoriteFoods.html", "text/html", res);
};
function displayMovies(url, req, res) {
    readRequest("/favoriteMovies.html", "text/html", res);
}
function displayFavFrameworks(url, req, res) {
    readRequest("/favoriteCSSframeworks.html", "text/html", res);
}
function display404(url, req, res) {
    readRequest("/404.html", "text/html", res);
}
