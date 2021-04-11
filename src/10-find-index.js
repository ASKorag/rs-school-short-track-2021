/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} arr
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let begin = 0;
  let end = arr.length - 1;
  let pos = -1;

  while (begin <= end) {
    const mid = Math.floor((begin + end) / 2);

    if (arr[mid] === value) {
      pos = mid;
      break;
    } else if (value < arr[mid]) {
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }

  return pos;
}

module.exports = findIndex;
