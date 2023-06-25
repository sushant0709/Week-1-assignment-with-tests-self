const fs = require('fs');

function LogMessageAfterWriting(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Content successfully written to file.");
}
const content = "Oh Wow!, It's amazing JS can write this to a file."
fs.writeFile('WriteFile.txt',content, 'utf-8', LogMessageAfterWriting);
