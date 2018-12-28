const expect = require('chai').expect;

// import fizzBuzzer
const adder = require('../fizzBuzzer');

  // test the normal case
  it('should throw an error if \'num\' is not a number' , function() {
    // range of normal inputs, including
    // notable cases like negative answers
    
    const normalCases = [
        {a: 2, b: '2', expected: true},
        {a: 3, b: '3', expected: true},
      ];
    
    const normalCases1 = [
      {a: 15, b: 3, expected: 5},
      {a: 15, b: 5, expected: 3},
      {a: 15, b: 2, expected: false}
    ];

    const normalCases2 = [
        {a: 15, b: 5, expected: 3},
        {a: 25, b: 5, expected: 5},
        {a: 9, b: 5, expected: false}
      ];

      const normalCases3 = [
        {a: 12, b: 3, expected: 3},
        {a: 9, b: 3, expected: 5},
        {a: 16, b: 2, expected: false}
      ];

    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = (input.a, input.b);
      expect(answer).to.equal(input.expected);
    });
  

  normalCases1.forEach(function(input) {
    const answer = (input.a, input.b);
    expect(answer).to.equal(input.expected);
  });


normalCases2.forEach(function(input) {
    const answer = (input.a, input.b);
    expect(answer).to.equal(input.expected);
  });


normalCases3.forEach(function(input) {
    const answer = (input.a, input.b);
    expect(answer).to.equal(input.expected);
  });


  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', 1],
      [2, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});