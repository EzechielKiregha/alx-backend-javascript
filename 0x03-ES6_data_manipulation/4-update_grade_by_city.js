/** *
 * this a a function that returns a
 * a new array its using filter and
 * map combine
 */

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents) || typeof city !== 'string' || !Array.isArray(newGrades)) throw new TypeError();
  return getListStudents.filter((item) => item.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...student, grade };
    });
}
