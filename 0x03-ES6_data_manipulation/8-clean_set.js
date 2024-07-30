/**
 * this receives a set and a starting word of
 * of a string returns the rest of the string combined
 * with other similar string starting with the starting
 * string
 */

export default function cleanSet(set, startStr) {
  if (!startStr || !startStr.length || typeof startStr !== 'string') return '';
  let theStr = '';
  set.forEach((element) => {
    if (element && element.startsWith(startStr)) theStr += `${element.slice(startStr.length)}-`;
  });
  return theStr.slice(0, theStr.length - 1);
}
