const needle = require('needle');
const fetchBreedDescription = function(breedName, callback) {
  const ENDPOINT = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  needle.get(ENDPOINT, (error, response, body) => {
    if (error) {
      callback(error, null);  // Call the callback with the error
    } else {
      if (body.length === 0) {
        callback("Cannot find this breed.", null);  // No breed found
      } else {
        callback(null, body[0].description);  // Success scenario
      }
    }
  });
};

module.exports = { fetchBreedDescription };
