import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const LibrarianDashboard = () => {
  const [books, setBooks] = useState([]);
  const { token } = useAuth();

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  useEffect(() => { fetchBooks(); }, []);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBooks();
    } catch (err) {
      alert(err.response?.data?.msg || 'Delete failed');
    }
  };

  return (
    <div>
      <h2>Librarian Dashboard</h2>
      <Link to="/book-form">Add New Book</Link>
      {books.map(book => (
        <div key={book._id}>
          <h3>{book.title} by {book.author}</h3>
          <p>Available: {book.available}</p>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default LibrarianDashboard;
