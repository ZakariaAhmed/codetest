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
    var myNamesArray = new Array();
    for (var person of people){ 
      if (person.age > limit){
        myNamesArray.push(person.name)
      }
    };
    return myNamesArray;
  };

  it('returns an array of the names of all people over the given age', () => {
    assert.deepEqual(getNamesOfPeopleOver(26), ['Fred', 'Barney']);
  });
});

describe('getSumOfAllAges', () => {
  const getSumOfAllAges = () => {
    // TODO: Complete this function to allow the test to pass
    var sum = 0;
    for (var person of people){
      sum+=person.age;
    };
    return sum;
  };

  it('calculates the sum of all ages', () => {
    assert.equal(getSumOfAllAges(), 80);
  });
});

describe('getInterests', () => {
  const getInterests = () => {
    // TODO: Complete this function to allow the test to pass
    var allInterests = new Array();
    for (var person of people){
      for (interest of person.interests){
        if (allInterests.indexOf(interest) == -1 ) allInterests.push(interest);
        }
      }
    return allInterests.sort();
  };

  it('returns a array of all interests, no duplicates, sorted', () => {
    assert.deepEqual(getInterests(), ['bowling', 'cinema', 'golf', 'running', 'swimming']);
  });
});

describe('getNamesAndInterests', () => {
  const getNamesAndInterests = () => {
    // TODO: Complete this function to allow the test to pass
    var myObject = {};
    for (var person of people){
      myObject[person.name] = person.interests;
    }
    return myObject;
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
