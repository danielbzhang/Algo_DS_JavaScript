// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  // for (let i = 0; i < str.length; i++) {
  //   const element = str[i];
  //   if (!obj[element]) {
  //     obj[element] = 1;
  //   } else {
  //     obj[element]++;
  //   }
  // }
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  let max = 0;
  let maxChar = '';
  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
  // console.log(max);
}

console.log(maxChar('hhhellllooooo'));

module.exports = maxChar;
