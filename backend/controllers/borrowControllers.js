import Borrow from '../models/borrow.js';
import Book from '../models/book.js';

// Borrow book
export const borrowBook = async (req, res) => {
    try {
        const { bookId } = req.body;
        const book = await Book.findById(bookId);
        if (!book || book.available < 1)
            return res.status(400).json({ msg: "No copies available" });

        book.available -= 1;
        await book.save();

        const borrow = new Borrow({
            userId: req.user.id,
            bookId,
        });

        await borrow.save();
        res.status(201).json({ msg: 'Book borrowed successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Return book
export const returnBook = async (req, res) => {
    try {
        const { borrowId } = req.body;

        const borrow = await Borrow.findById(borrowId);
        if (!borrow || borrow.returnDate)
            return res.status(400).json({ msg: "Invalid borrow record" });

        borrow.returnDate = new Date();
        await borrow.save();

        const book = await Book.findById(borrow.bookId);
        if (book) {
            book.available += 1;
            await book.save();
        }

        res.json({ msg: 'Book returned successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
