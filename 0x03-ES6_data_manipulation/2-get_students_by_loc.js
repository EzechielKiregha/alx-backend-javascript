/**
 * Function that filters an array object
 */

export default function getStudentsByLocation(students, city){
    if(!Array.isArray(students) || typeof city !== 'string') throw new TypeError();
    return students.filter((student) => student.location === city)
}