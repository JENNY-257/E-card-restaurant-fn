import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup';
import UserDashborad from './pages/UserDashborad';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-dashboard" element={<UserDashborad />}/>
    </Routes>
  </Router>
  )
}

export default App;