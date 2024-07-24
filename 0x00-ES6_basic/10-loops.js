export default function appendToEachArrayValue(array, appendString) {
  const returnedArray = [];
  for (const item of array) {
    returnedArray.push(appendString + item);
  }

  return returnedArray;
}
