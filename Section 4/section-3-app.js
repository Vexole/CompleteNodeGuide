const http = require('http');
const routes = require('./section-3-routes');

const server = http.createServer(routes); 

server.listen(3000); 