/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} num
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const result = [...String(num)];

  for (let i = 0; i < result.length; i++) {
    if (result[i] < result[i + 1] || i + 1 === result.length) {
      result[i] = '';
      break;
    }
  }

  return +result.join('');
}

module.exports = deleteDigit;
