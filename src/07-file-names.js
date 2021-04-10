/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const set = new Set();

  names.forEach((name) => {
    if (set.has(name)) {
      let i = 1;
      while (1) {
        if (!set.has(`${name}(${i})`)) {
          set.add(`${name}(${i})`);
          break;
        } else {
          i++;
        }
      }
    } else {
      set.add(name);
    }
  });

  return Array.from(set);
}

module.exports = renameFiles;
