/**
 * A specialized version of `_.forEachRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
const arrayEachRight = (array, iteratee) => {
  let length = array == null ? 0 : array.length;

  // eslint-disable-next-line no-plusplus
  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
};

export default arrayEachRight;
