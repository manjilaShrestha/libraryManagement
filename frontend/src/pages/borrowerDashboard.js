import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

const BorrowerDashboard = () => {
  const [books, setBooks] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    axios.get('/api/books').then(res => setBooks(res.data));
  }, []);

  const borrowBook = async (bookId) => {
    try {
      await axios.post('/api/borrow', { bookId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Book borrowed!');
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Available Books</h2>
      {books.map(book => (
        <div key={book._id}>
          <h3>{book.title} by {book.author}</h3>
          <p>Available: {book.available}</p>
          <button onClick={() => borrowBook(book._id)} disabled={book.available === 0}>Borrow</button>
        </div>
      ))}
    </div>
  );
};

export default BorrowerDashboard;
