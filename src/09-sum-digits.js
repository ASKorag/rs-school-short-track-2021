/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} num
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  if (num < 10) {
    return num;
  }

  const newNum = [...String(num)].reduce((ac, cu) => +ac + +cu);

  return getSumOfDigits(newNum);
}

module.exports = getSumOfDigits;
