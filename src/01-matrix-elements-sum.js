/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const width = matrix[0].length;
  const flatArr = matrix.flat();
  return flatArr.reduce((ac, cu, index, arr) => (arr[index - width] === 0 ? ac : ac + cu));
}

module.exports = getMatrixElementsSum;
