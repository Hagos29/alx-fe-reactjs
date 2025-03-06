import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile'
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/*" element={<Profile />}/>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
