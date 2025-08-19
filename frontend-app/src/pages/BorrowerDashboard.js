import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const BorrowerDashboard = () => {
  const [books, setBooks] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    axios.get('http://localhost:5000/api/books').then(res => setBooks(res.data));
  }, []);

  const borrowBook = async (bookId) => {
    try {
      await axios.post('http://localhost:5000/api/borrow', { bookId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Book borrowed!');
    } catch (err) {
      alert(err.response?.data?.msg || 'Borrow failed');
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
