// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // if (str.length > 0) {
  //   // debugger;
  //   const reversed = str.split('').reduce((acc, cur) => {
  //     return cur + acc;
  //   }, '');

  //   // for (let index = 0; index < str.length; index++) {
  //   //   if (reversed[index] !== str[index]) {
  //   //     return false;
  //   //   }
  //   // }
  //   // return true;

  //   return reversed === str;
  // }

  // if (str.length == 0) {
  //   return true;
  // }

  // ++++++++++++++++++++++++++++++++++

  if (str.length > 0) {
    const arr = str.split('');
    return arr.every((char, index, array) => {
      return char === array[array.length - index - 1];
    });
  }
}

console.log(palindrome('abba'));

module.exports = palindrome;
