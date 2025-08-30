import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
