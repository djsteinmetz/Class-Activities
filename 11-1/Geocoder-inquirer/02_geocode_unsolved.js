// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================
var inquirer = require('inquirer');
inquirer.prompt([
  {
    type: "input",
    message: "What landmark would you like to geocode?",
    name: "location"
  }
  /* Pass your questions in here */
])
  .then(function (inquirerResponse) {

    // Use user feedback for... whatever!!
    var geocoder = require('geocoder');
    // Geocoding
    geocoder.geocode(inquirerResponse.location, function (err, data) {
      // do something with data
      if (err) {
        console.log('error');
      } else {
        console.log(JSON.stringify(data.results[0].formatted_address, null, 2));
      }
    });
  });



// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address