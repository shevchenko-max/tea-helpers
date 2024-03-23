/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
const arrayEvery = (array, predicate) => {
  let index = -1;
  const length = array == null ? 0 : array.length;

  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
};

export default arrayEvery;
