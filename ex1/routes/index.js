const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Home Page!');
});

router.get('/about', (req, res) => {
    res.send('About Us');
});

module.exports = router;