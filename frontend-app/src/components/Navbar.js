import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          {user.role === 'borrower' && <Link to="/borrower">Borrower</Link>}
          {user.role === 'librarian' && <Link to="/librarian">Librarian</Link>}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
