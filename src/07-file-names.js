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
      let num = 1;
      while (set.has(name)) {
        if (!set.has(`${name}(${num})`)) {
          set.add(`${name}(${num})`);
          break;
        } else {
          num++;
        }
      }
    } else {
      set.add(name);
    }
  });

  return Array.from(set);
}

module.exports = renameFiles;
