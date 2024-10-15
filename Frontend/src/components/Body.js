import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';
import Login from './Login';

const Body = () => {
  return (
    <Router>
      <Routes>
        {/* Main Home route */}
        <Route path="/" element={<Home />}>
          {/* Child routes under Home */}
          <Route index element={<Feed />} />  {/* This acts as the default route under Home */}
          <Route path="profile/:id" element={<Profile />} />
        </Route>

        {/* Login route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Body;
