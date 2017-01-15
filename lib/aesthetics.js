'use strict';

const normalizeInput = function (input) {
  //take a string input and convert it into ALLCAPS with spaces between letters
  let characters = input.split('');

  let normalized = characters.map(function (character) {
    return character.toUpperCase();
  });

  return normalized;
};

module.exports = normalizeInput;
