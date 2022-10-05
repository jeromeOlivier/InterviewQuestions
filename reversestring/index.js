// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  // convert string to an array
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

// function reverse(str) {
//   // convert string to an array
//   const array = Array.from(str);
//   // using the length of the array, loop through the array and reconstruct
//   // the string backwards
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   // return the backwards string
//   return reversed;
// }

// function reverse(str) {
//   // convert string to an array
//   const array = Array.from(str);
//   // using the length of the array, loop through the array and reconstruct
//   // the string backwards
//   let reversed = "";
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversed = reversed + array[i];
//   }
//   // return the backwards string
//   return reversed;
// }

/*
 // using recursion
 function reverse(str) {
 return str === "" ? "" : reverse(str.substring(1)) + str.charAt(0);
 }
 */

const test = '9876543210';
reverse(test);

module.exports = reverse;
