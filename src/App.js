import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Book from './components/Book';
import Discover from './components/Discover';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Book />
      <Discover />
      <About />
    </div>
  );
}

export default App;