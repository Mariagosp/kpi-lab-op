'use strict';

const sum = (...args) => {
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let sum = 0;

  for (const num of args) {
    sum += num
  }

  return sum
};

console.log(sum(1, 2, 3))

module.exports = { sum };