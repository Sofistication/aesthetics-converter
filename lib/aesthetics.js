'use strict';

const normalizeInput = function (input) {
  //take a string input and convert it into ALLCAPS with spaces between letters
  let characters = input.split('');

  let normalized = characters.map(function (character) {
    return character.toUpperCase();
  });

  return normalized;
};

const makeAesthetic = function (input) {
  let aestheticString = '';
  let normalized = normalizeInput(input);

  for (let i = 0; i < normalized.length; i++) {
    let final = (i < normalized.length - 1) ? false : true;

    if (final) {
      aestheticString += normalized[i];
    } else {
      aestheticString += normalized[i] + ' ';
    }
  }

  return aestheticString;
};

module.exports = makeAesthetic;
