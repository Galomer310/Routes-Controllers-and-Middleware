const express = require('express');
const app = express();
const router = require('./routes/index.js');
const PORT = 3000;

app.use('/',router)

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`)
});