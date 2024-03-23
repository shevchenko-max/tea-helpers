/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
const arrayEach = (array, iteratee) => {
  let index = -1;
  const length = array == null ? 0 : array.length;

  // eslint-disable-next-line no-cond-assign
  while ((index += 1) < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
};

export default arrayEach;
