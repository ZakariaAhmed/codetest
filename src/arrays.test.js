const people = [
  {
    name: 'Fred',
    age: 27,
    interests: [
      'bowling',
      'golf',
    ],
  },
  {
    name: 'Wilma',
    age: 25,
    interests: [
      'running',
      'cinema',
    ],
  },
  {
    name: 'Barney',
    age: 28,
    interests: [
      'bowling',
      'running',
      'swimming',
    ],
  }
];

describe('getNamesOfPeopleOver', () => {
  const getNamesOfPeopleOver = limit => {
    // TODO: Complete this function to allow the test to pass
    return people.filter(person => person.age > limit).map(p => p.name);
  };

  it('returns an array of the names of all people over the given age', () => {
    assert.deepEqual(getNamesOfPeopleOver(26), ['Fred', 'Barney']);
  });
});

describe('getSumOfAllAges', () => {
  const getSumOfAllAges = () => {
    // TODO: Complete this function to allow the test to pass
    return people.reduce((acc, person) => {return acc+person.age}, 0);
  };

  it('calculates the sum of all ages', () => {
    assert.equal(getSumOfAllAges(), 80);
  });
});

describe('getInterests', () => {
  const getInterests = () => {
    // TODO: Complete this function to allow the test to pass
    return people.map((person) => person.interests).flat().sort().filter((val,i,arr ) => arr.indexOf(val) == i);
  };

  it('returns a array of all interests, no duplicates, sorted', () => {
    assert.deepEqual(getInterests(), ['bowling', 'cinema', 'golf', 'running', 'swimming']);
  });
});

describe('getNamesAndInterests', () => {
  const getNamesAndInterests = () => {
    // TODO: Complete this function to allow the test to pass
    return people.reduce((obj, val) => {
      obj[val.name] = val.interests
      return obj
    }, {})
  };

  it('returns an object with the names as keys, and the interests as values', () => {
    const expected = {
      Fred: [
        'bowling',
        'golf',
      ],
      Wilma: [
        'running',
        'cinema',
      ],
      Barney: [
        'bowling',
        'running',
        'swimming',
      ],
    };

    assert.deepEqual(getNamesAndInterests(), expected);
  });
});
