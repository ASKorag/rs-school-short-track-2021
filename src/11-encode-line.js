/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function getCode(str) {
  const char = str[0];
  const amount = str.length;
  return `${amount === 1 ? '' : amount}${char}`;
}

function encodeLine(str) {
  let pos = 0;
  const result = [];

  while (pos < str.length) {
    const char = str[pos];
    const regExp = new RegExp(`${char}+`, 'g');
    regExp.lastIndex = pos;

    const match = regExp.exec(str)[0];

    result.push(getCode(match));

    pos = regExp.lastIndex;
  }
  return result.join('');
}

module.exports = encodeLine;
