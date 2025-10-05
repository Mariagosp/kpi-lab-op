'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const result = []

  for (const item of array) {
    if (result.includes(item)) continue 

    result.push(item)
  }

  return result
};

const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);
// Результат: [2, 1, 3]
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
// Результат: ['top', 'bottom', 'left']

module.exports = { unique };