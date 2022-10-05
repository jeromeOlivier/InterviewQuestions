// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abbcccccccddd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const obj = {};
//   str.split('').forEach(char => obj[char] = ++obj[char] || 1);
//   return Object.keys(obj).reduce((a, b) => obj[a] < obj[b] ? a : b, 0);
// }


function maxChar(str) {
  const obj = {};
  str.split('').forEach(char => obj[char] = ++obj[char] || 1);
  return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
}

console.log(maxChar("apple 1231111"));

module.exports = maxChar;
