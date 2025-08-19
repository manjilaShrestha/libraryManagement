import Book from '../models/book.js';

// Create a new book
export const createBook = async (req, res) => {
    try {
        const { title, author, isbn, quantity } = req.body;
        const book = new Book({
            title,
            author,
            isbn,
            quantity,
            available: quantity,
        });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Update book
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// Delete book
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.json({ msg: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
