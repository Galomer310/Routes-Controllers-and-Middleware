const express = require('express');
const router = express.Router();

let books = [];
let idCounter = 1;

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const newBook = {
        id: idCounter++,
        ...req.body
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// update book by id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) { // Corrected the condition
        books[index] = { id, ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// delete a book by id 
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.status(204).end();
});

module.exports = router;