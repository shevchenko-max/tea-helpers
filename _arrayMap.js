/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
const arrayMap = (array, iteratee) => {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = Array(length);

  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
};

export default arrayMap;
