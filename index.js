# This is my simple Hello World app

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, whole World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
