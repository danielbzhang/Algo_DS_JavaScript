// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const subArray = array.slice(0, size);
    result.push(subArray);
    array = array.slice(size);
    if (array.length > size) {
      continue;
    } else if (array.length <= size && array.length !== 0) {
      result.push(array);
      break;
    }
  }

  return result;
}

function chunk1(array, size) {
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, size + index));
    index += size;
  }
  return result;
}

// function chunk(array, size) {
//   const chunked = [];

//   for (let ele of array) {
//     const last = chunked[chunked.length - 1];
//     console.log(last);
//     if (!last || last.length === size) {
//       chunked.push([ele]);
//     } else {
//       last.push(ele);
//     }
//   }

//   return chunked;
// }

console.log(chunk1([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk1([1, 2, 3, 4, 5], 14));

module.exports = chunk;
