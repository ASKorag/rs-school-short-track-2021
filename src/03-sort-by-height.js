/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const heights = arr.filter((num) => num !== -1).sort((a, b) => a - b);
  const result = arr.map((num) => (num === -1 ? -1 : 0));

  let pos = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 0) {
      result[i] = heights[pos];
      pos++;
    }
  }

  return result;
}

module.exports = sortByHeight;
