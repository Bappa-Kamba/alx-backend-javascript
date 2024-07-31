// Import the http module
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello Holberton School!"
  res.end('Hello Holberton School!\n');
});

// The server listens on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

// Export the server
module.exports = app;
