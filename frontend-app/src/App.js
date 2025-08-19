// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Login';
import Register from './pages/Register';
import BorrowerDashboard from './pages/BorrowerDashboard';
import LibrarianDashboard from './pages/LibrarianDashboard';
import BookForm from './pages/BookForm';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

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
