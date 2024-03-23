/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
const arrayPush = (array, values) => {
  let index = -1;
  const { length } = values;
  const offset = array.length;

  // eslint-disable-next-line no-plusplus
  while (++index < length) {
    // eslint-disable-next-line no-param-reassign
    array[offset + index] = values[index];
  }
  return array;
};

export default arrayPush;
