import React from 'react'
import './App.css';
import { BrowserRouter as Router , Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useAuth } from './contexts/AuthContext';

const App = () => {

  const authContext = useAuth();
  console.log('authContext:', authContext);

  const { isAuthenticated } = authContext || {};
  console.log('yes', isAuthenticated)

  return <Router>
    <Routes>
      <Route path='/' element= { !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
      <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" /> } />
      <Route path='/dashboard' element={!isAuthenticated ? <Dashboard /> : <Login /> } />
    </Routes>
  </Router>
}

export default App
