'use strict';

const phonebook = {
  Mari: '+000000000000',
  Anna: '+111111111111',
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Mari'))

module.exports = { phonebook, findPhoneByName };