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
function minesweeper(matrix) {
  const res = matrix.map((row, rowIndex, arr) => {
    const newRow = row.map((item, colIndex, rowArr) => {
      const prevRow = rowIndex === 0
        ? []
        : [arr[rowIndex - 1][colIndex - 1], arr[rowIndex - 1][colIndex],
          arr[rowIndex - 1][colIndex + 1]];

      const nextRow = rowIndex === arr.length - 1
        ? []
        : [arr[rowIndex + 1][colIndex - 1], arr[rowIndex + 1][colIndex],
          arr[rowIndex + 1][colIndex + 1]];

      const checkArr = [
        ...prevRow,
        rowArr[colIndex - 1], rowArr[colIndex + 1],
        ...nextRow,
      ];

      return checkArr.filter((value) => value === true).length;
    });
    return newRow;
  });

  return res;
}

module.exports = minesweeper;
