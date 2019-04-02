const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<p>Home Page</p>');
});

app.listen(3000);