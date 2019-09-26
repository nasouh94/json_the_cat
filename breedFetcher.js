const request = require("request");
const breed = process.argv[2];


function requestBreed(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    const data = JSON.parse(body);
    const breedDescription = data[0];
 
    if (breedDescription == null) {
      console.log("breed doesn't exist");
    } else if (error) {
      throw error
    
    } else {
      console.log(breedDescription.description);
    }

  });
}

requestBreed(breed);

