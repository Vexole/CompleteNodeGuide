const http = require('http');

const server = http.createServer((req, res) => {
      console.log(req);
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>First Application</title></head>');
      res.write('<body><p>This is the first application.</p></body>');
      res.write('</html>');
      res.end(); 
}); 

server.listen(3000);