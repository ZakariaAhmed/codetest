const getRandomValue = (min = 0, max = 1) => {
  // TODO: Complete this function to allow the test to pass
  
  return new Promise((resolve, reject) => { resolve( parseInt(Math.random()*100) )})
};

describe('getRandomValue', () => {
  it('returns a promise of a random integer', () => {
    getRandomValue().then(value => assert.isNumber(value));
  });
});

describe('getFourRandomValues', () => {
  const getFourRandomValues = (min, max) => {
    // TODO: Complete this function to allow the test to pass
    return Promise.all([getRandomValue(), getRandomValue(), getRandomValue(), getRandomValue()]);
  };

  it('returns an array of four integers, generated by getRandomValue()', () => {
    getFourRandomValues().then(values => assert.lengthOf(values, 4));
  });
});