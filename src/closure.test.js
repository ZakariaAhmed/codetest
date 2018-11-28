describe('multiplier', () => {
  const multiplier = (firstNum) => {
    // TODO: Complete this function to allow the test to pass
    return (secondNum) => {
      return firstNum*secondNum;
    }
  };

  describe('when given a number, a function is returned which when called', () => {
    it('returns the multiplication of the two numbers', () => {
      const times12 = multiplier(12);
      
      assert.equal(times12(3), 36);
    });
  });
});

describe('counter', () => {
  // Used a self-invoking tag
  const count = (() => {
    // TODO: Complete this function to allow the test to pass
    var counter = -1;
    return () => {++counter; return counter;}
  })();
 

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
