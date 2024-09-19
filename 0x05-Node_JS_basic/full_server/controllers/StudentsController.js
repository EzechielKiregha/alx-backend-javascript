const readDatabase = require('../utils');

class StudentsController {
  static format(fields) {

    const keys = Object.keys(fields);

    let result = 'This is the list of our students\n';

    keys.sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
      /* eslint-disable-next-line */
      if (fields.hasOwnProperty(key)) {
        result += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
      }
    }

    return result.trim();
  }

  static async getAllStudents(request, response) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';
    let responseMessage;

    await readDatabase(filePath)
      .then((result) => {
        responseMessage = StudentsController.format(result);
        response.statusCode = 200;
      })
      .catch((error) => {
        console.log(error);
        responseMessage = 'Cannot load the database';
        response.statusCode = 500;
      });

    response.send(responseMessage);
  }

  static async getAllStudentsByMajor(request, response) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';
    const allowedMajors = ['CS', 'SWE'];
    const { major } = request.params;
    let responseMessage;

    if (!allowedMajors.includes(major)) {
      responseMessage = 'Major parameter must be CS or SWE';
      response.statusCode = 500;
      response.send(responseMessage);
      return;
    }

    await readDatabase(filePath)
      .then((result) => {
        const students = result[major.toUpperCase()];

        if (students) {
          responseMessage = `List: ${students.join(', ')}`;
          response.statusCode = 200;
        } else {
          responseMessage = `No students found for the ${major} major`;
          response.statusCode = 200;
        }
      })
      .catch(() => {
        responseMessage = 'Cannot load the database';
        response.statusCode = 500;
      });

    response.send(responseMessage);
  }
}

module.exports = StudentsController;
