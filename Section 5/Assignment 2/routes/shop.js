const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<p>Home Page</p>');
});

module.exports = router;