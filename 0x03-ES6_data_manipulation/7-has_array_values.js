/** *
 * this function returns true if all 
 * elements of a set exist within the array
 */

export default function hasValuesFromArray(setInstance, arr) {
  for (const item of arr) {
    if (!setInstance.has(item)) {
      return false;
    }
  }
  return true;
}
