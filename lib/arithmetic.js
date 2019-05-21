"use strict";

let arithmetic = (module.exports = {});
let helper = require("../helper.js");

arithmetic.add = function(arr) {
  let sum = 0;
  arr.map(num => {
    console.log(typeof num, " what");
    if (helper.check(num) === null) {
      console.log("returning null");
      return null;
    } else {
      sum = sum += num;
    }
  });
  return sum;
};

arithmetic.greet = function(word) {
  return `hello ${word}`;
};

arithmetic.subtract = function(arr) {
  let sub = 0;
  // if (typeof a !== "number" || typeof b !== "number") {
  //   return null;
  // }
  arr.forEach(num => {
    sub -= num;
  });
  return sub;
};

arithmetic.multiply = function(arr) {
  let product = 1;
  // if( typeof a !== "number" || typeof b !== "number"  || a === 0 || b === 0) { return null; }
  arr.forEach(num => {
    product *= num;
  });
  return product;
};
