const {readFileSync,writeFileSync} = require('fs');

// The same as
// const fs = require('fs');
// fs.readFileSync
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/result-sync.txt',
   `Here is the result: ${first}, ${second}`,
   {flag: 'a'});

// console.log(first,second);
console.log('done with task')
console.log('starting next')