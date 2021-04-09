/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regExp = /(?<=@)[a-z\d-]+\.[a-z]{2,3}$/i;
  return email.match(regExp)[0];
}

module.exports = getEmailDomain;
