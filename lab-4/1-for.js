"use strict";

const sum = (...args) => {
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

console.log(sum(1, 2, 3));

module.exports = { sum };
