import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    <Router>
    <Navbar/>
    {/* This is to create the path to="/ " in the navbar.js */}
    <Routes>
      <Route path='/' exact Component={Home}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App