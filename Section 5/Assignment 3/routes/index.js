const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'user.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'));
});
module.exports = router;