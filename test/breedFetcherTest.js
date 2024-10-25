const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', function() {
  it('returns a string description for a valid breed, via callback',  function(done) {
    fetchBreedDescription('Siberian', (err, desc) => {    
      // we expect no error for this scenario
      assert.equal(err, null);
    
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
    
      // compare returned description
      assert.equal(expectedDesc, desc.trim());
    
      done();
    });
  });

  it('returns no breed found when breed not exist in data',  function(done) {
    fetchBreedDescription('abc', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      const exapecrtedErr = "Cannot find this breed.";

      // compare returned description
      assert.equal(exapecrtedErr, err);

      done();
    });
  });
});



