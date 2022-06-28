const http = require('http');
const app = require('./app');

const hostname = '0.0.0.0';
const port = 4000;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});