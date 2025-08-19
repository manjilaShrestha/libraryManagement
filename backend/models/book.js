import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: { type: String, unique: true },
    quantity: Number,
    available: Number
});

export default mongoose.model('Book', bookSchema);
