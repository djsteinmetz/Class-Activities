// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================
var geocoder = require('geocoder');
var input = process.argv
var citySearch = [];
for(var i=2; i<input.length; i++) {
    citySearch.push(input[i]);
}; 
var city = citySearch.join(" ");
console.log("Search for: " + city);

// console.log(city);
// Geocoding
geocoder.geocode(city, function ( err, data ) {
  // do something with data
  if(err) {
      console.log('error');
  } else {
    console.log(JSON.stringify(data.results[0].formatted_address, null, 2));
  }
});

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address