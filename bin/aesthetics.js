'use strict';

const aes = require('../lib/aesthetics');
const ask = require('../lib/ask');

console.log('Welcome to the land of A E S T H E T I C S !');
let text = ask('What would you like to aestheticize?');

console.log('L E T \' S  G E T  A E S T H E T I C !');
console.log('     -----------     ');
console.log(aes(text));
