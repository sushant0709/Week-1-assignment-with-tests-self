/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var answer = true;
  str = str.replace(/[^\w\s]|_/g, "").toLowerCase().split(" ").join("");
  console.log(str);
  for (var i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str[i] != str[j]) {
      answer = false;
    }
  }
  return answer;
}
// console.log(isPalindrome("A man a plan a canal Panama"));
module.exports = isPalindrome;
