const express = require('express');
const router = express.Router();

let todos = [];
let idCounter = 1;

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const newTodo = {
        id: idCounter++,
        ...req.body
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a to-do item by id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todos[index] = { id, ...req.body };
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: 'To-do item not found'});
    }
});

// Delete a to-do item by id 
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).end();
});

module.exports = router;