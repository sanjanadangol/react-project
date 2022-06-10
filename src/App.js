import React from 'react'
import { Routes, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Register from './components/Register';


function App() { 

  return (
    <>
    
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/featured" element={<Featured/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/footer" element={<Footer />} />
          
      </Routes>
      
    </>
  );
}

export default App;
