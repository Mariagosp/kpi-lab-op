"use strict";

const removeElement = (array, item) => {
  const i = array.indexOf(item);
  if (i !== -1) array.splice(i, 1);
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);
// Результат: [1, 2, 3, 4, 6, 7]

const array2 = ["Kiev", "Beijing", "Lima", "Saratov"];
removeElement(array2, "Lima"); // удалит 'Lima' из массива
removeElement(array2, "Berlin"); // не удалит ничего
console.log(array2);
// Результат: ['Kiev', 'Beijing', 'Saratov']

module.exports = { removeElement };
