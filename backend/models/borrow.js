import mongoose from 'mongoose';

const borrowSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    borrowDate: { type: Date, default: Date.now },
    returnDate: { type: Date, default: null }
});

export default mongoose.model('Borrow', borrowSchema);
