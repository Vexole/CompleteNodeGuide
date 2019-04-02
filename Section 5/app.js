const http = require('http');
const express = require('express');

const app = express();

app.use('/users', (req, res, next ) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next ) => {
    res.send('<h1>Hello from Express</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);