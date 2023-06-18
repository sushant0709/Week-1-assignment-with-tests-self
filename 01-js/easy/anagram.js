/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// 1. "facbde" => ['f','a','c','b','d','e']
// 2. Sort the above list
// 3.['a','b','c','d','e','f'] =>  "abcdef"
function sort(str) {
  var list = str.split('');
  list.sort();
  return list.join('');
}

function isAnagram(str1, str2) {
  if (sort(str1.toLowerCase()) == sort(str2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
// Sample function run
// console.log(isAnagram("Lione","onila"));

module.exports = isAnagram;
