import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authContext';

import Login from './pages/login';
import Register from './pages/register';
import BorrowerDashboard from './pages/borrowerDashboard';
import LibrarianDashboard from './pages/librarianDashboard';
import BookForm from './pages/bookForm';
import Profile from './pages/profile';
import Navbar from './components/navbar';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/borrower" element={
            <PrivateRoute roles={['borrower']}>
              <BorrowerDashboard />
            </PrivateRoute>
          } />

          <Route path="/librarian" element={
            <PrivateRoute roles={['librarian']}>
              <LibrarianDashboard />
            </PrivateRoute>
          } />

          <Route path="/book-form" element={
            <PrivateRoute roles={['librarian']}>
              <BookForm />
            </PrivateRoute>
          } />

          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
