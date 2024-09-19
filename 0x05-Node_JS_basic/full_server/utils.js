const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().trim().split('\n').slice(1);

      const fields = {};

      lines.forEach((line) => {
        const studentRecord = line.split(',');

        if (!(studentRecord[3] in fields)) fields[studentRecord[3]] = [];

        fields[studentRecord[3]].push(studentRecord[0]);
      });

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
