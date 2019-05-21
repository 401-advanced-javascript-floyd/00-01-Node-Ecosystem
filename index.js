'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');
//const arithmetic = require('../lib/arithmetic.js');

console.log( arithmetic.add([1,2,3,4]));
console.log('greet', arithmetic.greet('Floyd'));
console.log(arithmetic.subtract([30,8,1,2])); // -41
console.log(arithmetic.multiply([1,2,3,4])); // 24


