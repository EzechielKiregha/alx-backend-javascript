/**
 * this is a funcition that returns the
 * sum of ids using reduce
 *
 */

export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) throw new TypeError();
  return getListStudents.reduce((acc, currentValue) => acc + currentValue.id, 0);
}
