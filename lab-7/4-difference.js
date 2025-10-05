'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const result = []

  for (const item1 of array1) {
    if (!array2.includes(item1)) {
      result.push(item1)
    }
  }

  return result 
};

// const array1 = [7, -2, 10, 5, 0];
// const array2 = [0, 10];
// const result = difference(array1, array2);
// console.log(result);
// // Результат: [7, -2, 5]

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing']

module.exports = { difference };