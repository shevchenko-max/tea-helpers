/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
const arrayReduce = (array, iteratee, accumulator, initAccum) => {
  let index = -1;
  const length = array == null ? 0 : array.length;

  if (initAccum && length) {
    // eslint-disable-next-line no-param-reassign,no-plusplus
    accumulator = array[++index];
  }
  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    // eslint-disable-next-line no-param-reassign
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
};

export default arrayReduce;
