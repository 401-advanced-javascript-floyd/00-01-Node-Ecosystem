'use strict';

const arithmetic = require('../lib/arithmetic.js');

//console.log('line 8', math.multiply( [1,2,3,4]));
describe('Testing challenge multiply', () => {
  test('It should multiply numbers together', () => {
    expect(arithmetic.multiply([1,2,3,4])).toStrictEqual(24);
  });
});

describe('add', () => {
  test('It should add numbers together', () => {
    expect(arithmetic.add([1,2,3,4])).toStrictEqual(10);
  });
});

describe('subtract', () => {
  test('It should subtract numbers' , () => {
    expect(arithmetic.subtract([30,8,1,2])).toStrictEqual(-41);
  });
});
