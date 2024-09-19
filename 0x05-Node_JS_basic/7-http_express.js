const express = require('express');
const { readFile } = require('fs');

const app = express();
const PORT = 1245;

function countStudents(fileName) {
  const course = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    const response = [];
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(course, field[3])) {
              course[field[3]].push(field[0]);
            } else {
              course[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        response.push(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            response.push(
              `Number of students in ${key}: ${value}. List: ${course[key].join(
                ', ',
              )}`,
            );
          }
        }
        resolve(response.join('\n'));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((data) => {
      res.send(['This is the list of our students\n', data].join(''));
    })
    .catch(() => {
      res.statusCode = 404;
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(PORT, () => {});

module.exports = app;
