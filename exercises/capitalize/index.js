// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(' ');
  const array = [];

  for (let w of arr) {
    // w = w.charAt(0).toUpperCase() + w.slice(1, w.length);
    w = w[0].toUpperCase() + w.slice(1);
    array.push(w);
  }
  const result = array.join(' ');
  return result;
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));

module.exports = capitalize;
