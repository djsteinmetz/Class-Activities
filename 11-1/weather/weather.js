var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
var input = process.argv
var citySearch = "";
for(var i=2; i<input.length; i++) {
    citySearch = citySearch + " " + input[i];
};

weather.find({search: citySearch, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
  console.log(JSON.stringify(result[1].current.temperature + "F", null, 2));
});