'use strict';

const sum = (...args) => {
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6

  let sum = 0

  while (args.length > 0) {
    sum += args.pop()
  }

  return sum
};

console.log(sum(1, 2, 3))

module.exports = { sum };