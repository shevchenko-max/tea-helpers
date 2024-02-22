export const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

export const msToHours = (ms) => ms / (1000 * 3600);
export const msToMinutes = (ms) => ms / (1000 * 60);
export const msToDays = (ms) => ms / (1000 * 3600 * 24);
export const daysToMs = (days) => days * (1000 * 3600 * 24);
export const hoursToMs = (hours) => hours * (3600 * 1000);
export const calculateTimeDiffInMinutes = (primaryDate, secondaryDate) => msToMinutes(+new Date(primaryDate) - +new Date(secondaryDate));
export const calculateTimeDiffInDays = (primaryDate, secondaryDate) => msToDays(+new Date(primaryDate) - +new Date(secondaryDate));

export const transformStringToBase64 = (str) => (Buffer.from(str, 'utf-8')).toString('base64');

export const removeDateSeconds = (inputDate) => {
  const date = new Date(inputDate);
  date.setSeconds(0, 0);

  return date;
};

export const arrayToTree = (arr, parent, depth = 0) => {
  if (depth >= 20) {
    return [];
  }

  return arr
    .filter((item) => (!depth && !item.parentCategoryId) || item.parentCategoryId === parent)
    .map((child) => ({ ...child, depth, children: arrayToTree(arr, child.id, depth + 1) }));
};

export const isArraysContentSame = (firstArray = [], secondArray = []) => firstArray.every((element) => secondArray.includes(element));

export const transformArrayOfNumbers = (value) => !Array.isArray(value) ? value.split(',').map(Number) : value.map(Number);

export const isAllowedLanguage = (value) => !Array.isArray(value) ? value.split(',').map(Number) : value.map(Number);

export const transformArrayOfStrings = (value) => (!Array.isArray(value) ? [value] : value);

export const transformEmptyStringToNull = (value) => value === '' ? null : value;

export const wait = (ms) => new Promise((res) => { setTimeout(() => res(true), ms)});

export const isValidUrl = (url) => {
  try {
    return !!new URL(url);
  } catch (error) {
    return false;
  }
};

export const transformExcelDateToTimestamp = (value) => new Date(Math.round((value - 25569) * 86400 * 1000));

export const transformFromCents = (value) => value ? parseFloat((Math.ceil(value) / 100).toFixed(2)) : 0;

export const transformToCents = (value) => value ? Math.ceil(parseFloat((value * 100).toFixed(2))) : 0;

export const transformToInt = (value) => parseInt(value, 10) || 0;

export const transformToFloat = (value) => parseFloat(value) || 0;

export const quoteQuery = (query = '') => query.replace(/'/g, "''");

export const capitalizeLetters = (str) => str.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

export const swapObject = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
