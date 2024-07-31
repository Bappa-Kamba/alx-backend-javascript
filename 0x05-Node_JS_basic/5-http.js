const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;

    const dbPath = process.argv[2];
    res.write('This is the list of our students\n');

    countStudents(dbPath)
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

module.exports = app;
