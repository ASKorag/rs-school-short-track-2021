/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} str
 * @return {Boolean}
 *
 * @example
//  * For 1B-00-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  return /^([\dA-F]{2}-){5}[\dA-F]{2}$/i.test(str);
}

module.exports = isMAC48Address;
