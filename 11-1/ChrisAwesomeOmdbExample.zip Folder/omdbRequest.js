// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package
var request = require("request");

var movieArgs = process.argv; 

var movieTitle = '';

for (i=2; i<movieArgs.length; i++){
	movieTitle += movieArgs[i] + ' ';
}

let options = {
	url: "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy"
}

// We then run the request module on a URL with a JSON
request(options, function(error, response, body) {

  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    // Then we print out the imdbRating
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
	console.log(JSON.parse(body).Plot);
  }
});
