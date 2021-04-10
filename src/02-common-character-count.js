/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const set = new Set(s1);

  let result = 0;

  set.forEach((char) => {
    const regExp = new RegExp(`${char}`, 'g');

    const match1 = s1.match(regExp) || [];
    const match2 = s2.match(regExp) || [];

    result += Math.min(match1.length, match2.length);
  });

  return result;
}

module.exports = getCommonCharacterCount;
