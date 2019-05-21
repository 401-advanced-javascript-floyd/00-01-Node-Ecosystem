'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');
//const arithmetic = require('../lib/arithmetic.js');

console.log( arithmetic.add([1,2,3,4]));
console.log('greet', arithmetic.greet('Floyd'));
console.log(arithmetic.subtract([30,8,1,2])); // -41
console.log(arithmetic.multiply([1,2,3,4])); // 24



// describe('Testing challenge 1', () => {
//   test('It should return the message with all uppercase characters', () => {
//     expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
//   });
// });
// const speaker = (message, callback) => {

//   return callback(message);
// };

// const greeting = (word) => {
//   console.log(word.toUpperCase());
//   return word.toUpperCase();
// };

// const speaker = (message, callback) => {

//   return callback(message);
// };
  
// describe('Testing challenge 2', () => {
//   test('It should add the number 8 to the array five times', () => {
//     expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
//     expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
//   });
// });

// describe('Testing challenge 3', () => {
//   test('It should remove three elements from the array', () => {
//     expect(removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
//     expect(removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne).length).toStrictEqual(7);
//   });
// });

// describe('Testing challenge 4', () => {
//   test('It should remove three elements from the array', () => {
//     expect(removeWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
//     expect(removeWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne).length).toStrictEqual(7);
//   });
// });

// describe('Testing challenge 5', () => {
//   test('It should remove three elements from the array', () => {
//     expect(removeWithAnon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
//     expect(removeWithAnon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(7);
//   });
// });

// describe('Testing challenge 6', () => {
//   const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

//   test('It should only add the available items to the list', () => {
//     expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
//     expect(createList(inventory).length).toStrictEqual(3);
//   });
// });

// describe('Testing challenge 7', () => {
//   const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//   test('It should print out messages or numbers', () => {
//     expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
//     expect(fizzbuzz(inputs).length).toStrictEqual(16);
//   });
// });
// describe('Testing challenge 1', () => {
//   test('It should return the message with all uppercase characters', () => {
//     expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
//   });
// });

// const greeting = (word) => {
//   console.log(word.toUpperCase());
//   return word.toUpperCase();
// };

// const speaker = (message, callback) => {

//   return callback(message);
// };