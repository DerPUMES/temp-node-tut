// commonJS, every file in node is module (by default)
// Modules - encapsulated code (only share minimum)
const names = require('./names');
//const {john , peter} = require('./names');
const sayHi = require('./utils');
const data = require('./flavor');
require('./mind-grenade');


// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);