const request = require("request");
const breedName = process.argv[2];


function fetchBreedDescription(breed,callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    const data = JSON.parse(body);
    const breedDescription = data[0];
 
    if (breedDescription == null) {
      console.log("breed doesn't exist");
    } else if (error) {
      callback("error",null)
    
    } else {
      callback(null, breedDescription.description)
    }

  });
}

module.exports = { fetchBreedDescription };







