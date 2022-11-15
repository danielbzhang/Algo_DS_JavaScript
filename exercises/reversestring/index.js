// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   if (str.length > 0) {
//     const newStr = str.split('').reverse().join('');
//     return newStr;
//   } else {
//     return;
//   }
// }

// function reverse(str) {
//   const myArr = [];
//   const arr = str.split('');

//   for (let index = arr.length - 1; index >= 0; index--) {
//     const element = arr[index];
//     myArr.push(element);
//   }
//   const result = myArr.join('');
//   return result;
// }

// function reverse(str) {
//   let reversed = '';
//   for (const letter of str) {
//     reversed = letter + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  let arr = str.split('');
  const result = arr.reduce((acc, cur) => {
    return cur + acc;
  }, '');

  return result;
}

console.log(reverse('apple'));
// reverse('apple');

module.exports = reverse;
