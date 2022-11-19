// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// helper function
function buildCharMap(str) {
  str = str.replace(/[^\w]/g, '').toUpperCase();
  let obj = {};

  for (let ele of str) {
    !obj[ele] ? (obj[ele] = 1) : obj[ele]++;
  }
  // console.log(obj);

  return obj;
}

function anagrams(stringA, stringB) {
  const objA = buildCharMap(stringA);
  const objB = buildCharMap(stringB);

  if (Object.keys(objA).length === Object.keys(objB).length) {
    for (let keyA in objA) {
      if (objA[keyA] !== objB[keyA]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// another way:
function helperFunc(str) {
  return str.replace(/[^\w]/g, '').toUpperCase().split('').sort().join('');
}

function anagrams1(stringA, stringB) {
  return helperFunc(stringA) === helperFunc(stringB);
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));

console.log(anagrams1('rail safety', 'fairy tales'));
console.log(anagrams1('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams1('Hi there', 'Bye there'));

module.exports = anagrams;
