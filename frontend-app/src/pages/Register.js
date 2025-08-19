import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig'; // Assuming you have a configured axios instance

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'borrower' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered successfully!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="borrower">Borrower</option>
        <option value="librarian">Librarian</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
