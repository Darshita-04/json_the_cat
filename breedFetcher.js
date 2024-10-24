const USERINPUT = process.argv.splice(2);
const CATBREED = USERINPUT[0];
const ENDPOINT = `https://api.thecatapi.com/v1/breeds/search?q=${CATBREED}`;
const needle = require('needle');

needle.get(ENDPOINT, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    if (body.length === 0) {
      console.log("Cannot find this breed.");
    } else {
      console.log(body[0].description);
    }
  }
});