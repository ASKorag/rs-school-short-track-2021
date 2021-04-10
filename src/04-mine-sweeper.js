/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getPartOfRow(row, index) {
  return row.slice((index === 0 ? 0 : index - 1), index + 2);
}

function minesweeper(matrix) {
  return matrix.map((row, rowIndex, arr) => {
    const newRow = row.map((item, colIndex, rowArr) => {
      const prevRow = rowIndex === 0
        ? []
        : getPartOfRow(arr[rowIndex - 1], colIndex);

      const nextRow = rowIndex === arr.length - 1
        ? []
        : getPartOfRow(arr[rowIndex + 1], colIndex);

      const checkedArr = [
        ...prevRow,
        rowArr[colIndex - 1], rowArr[colIndex + 1],
        ...nextRow,
      ];

      return checkedArr.reduce((amount, cu) => (cu === true ? amount + 1 : amount), 0);
    });
    return newRow;
  });
}

module.exports = minesweeper;
