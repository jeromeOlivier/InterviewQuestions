// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);


console.log(reverseInt(15) === 51);
console.log(reverseInt(981) === 189);
console.log(reverseInt(500) === 5);
console.log(reverseInt(-15) === -51);
console.log(reverseInt(-90) === -9);

module.exports = reverseInt;
