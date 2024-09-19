const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer();
const path = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().trim().split('\n').slice(1);

      let count = 0;

      const fields = {};

      lines.forEach((line) => {
        count += 1;

        const studentRecord = line.split(',');

        if (!(studentRecord[3] in fields)) fields[studentRecord[3]] = [];

        fields[studentRecord[3]].push(studentRecord[0]);
      });
      let result = `Number of students: ${count}\n`;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      result = result.trim();

      resolve(result);
    });
  });
}

function handleRootRoute(req, res) {
  const responseMessage = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMessage.length);
  res.statusCode = 200;

  res.write(Buffer.from(responseMessage));
}

async function handleStudentRoute(req, res) {
  let responseMessage = ['This is the list of our students'];

  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  await countStudents(path)
    .then((result) => {
      responseMessage.push(result);

      responseMessage = responseMessage.join('\n');
    })
    .catch(() => {
      responseMessage = 'This is the list of our students\nCannot load the database';
    });

  res.setHeader('Content-Length', responseMessage.length);

  res.write(Buffer.from(responseMessage));

  res.end();
}

app.on('request', (req, res) => {
  if (req.url === '/') {
    handleRootRoute(req, res);
  } else {
    handleStudentRoute(req, res);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
