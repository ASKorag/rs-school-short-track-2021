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
  const matrixWidth = matrix[0].length;
  const newArr = [].concat(...matrix);
  const sum = newArr.reduce((ac, cu, index, startArr) => {
    if (
      startArr[index - matrixWidth] === 0 ||
      startArr[index - matrixWidth] === undefined
    ) {
      return ac + 0;
    }
    return ac + cu;
  }, 0);
  return sum;
}

module.exports = getMatrixElementsSum;
