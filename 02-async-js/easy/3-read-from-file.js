const fs = require('fs');

function PrintFileData(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File contents: ', data);
}
fs.readFile('file.txt', 'utf-8', PrintFileData);

// expensive operation: this will prevent execution of callback of async
// function to execute until CS is occupied by this operation
var counter = 0;

for(var i=0;i<=1000000000000000;i++){
    counter += i;
}
console.log(counter);