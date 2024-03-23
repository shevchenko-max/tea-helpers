/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
const arrayFilter = (array, predicate) => {
  let index = -1;
  const length = array == null ? 0 : array.length;
  let resIndex = 0;
  const result = [];

  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      // eslint-disable-next-line no-plusplus
      result[resIndex++] = value;
    }
  }
  return result;
};

export default arrayFilter;
