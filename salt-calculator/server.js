const http = require('http');
const calculator = require('./calculator');
const api = require('./api');

const resource = api.create(calculator);

const port = 8080;

const server = http
  .createServer((req, res) => resource.route(req, res))
  .listen(port);

server.on('listening', () => console.log('Server is listening on port', server.address().port));
