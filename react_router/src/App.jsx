import { useState } from 'react'
import "tailwindcss";
import './App.css'
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/Aboutus';
import Contact from './components/Contactus';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Home />
     <About />
     <Contact />
     <Footer />
    </>
  )
}

export default App
