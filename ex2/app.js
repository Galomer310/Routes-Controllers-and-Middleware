const express = require('express');
const todosRouter = require('./routes/todo.js');
const app = express();
const PORT = 3000;
// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/todos', todosRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT},`)
});