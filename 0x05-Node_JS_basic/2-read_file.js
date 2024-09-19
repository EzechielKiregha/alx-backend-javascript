/**
 * perform a synchronous operation
 * in node
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().trim().split('\n').slice(1);
    let count = 0;

    const rows = {};
    lines.forEach((item) => {
      const studentRecord = item.split(',');
      // creating an object of key field and value first
      // name
      if (!(studentRecord[3] in rows))rows[studentRecord[3]] = [];
      rows[studentRecord[3]].push(studentRecord[0]);
      count += 1;
    });
    console.log(`Number of students: ${count}`);
    for (const field in rows) {
      if (Object.prototype.hasOwnProperty.call(rows, field)) {
        console.log(`Number of students in ${field}: ${rows[field].length}. List: ${rows[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // process.stdout.write(count.toString())
}
module.exports = countStudents;
