import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
  const [form, setForm] = useState({ title: '', author: '', isbn: '', quantity: 1 });
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Book added!');
      navigate('/librarian');
    } catch (err) {
      alert(err.response?.data?.msg || 'Add failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="isbn" placeholder="ISBN" onChange={handleChange} required />
      <input name="quantity" type="number" min="1" onChange={handleChange} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
