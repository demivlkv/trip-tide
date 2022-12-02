import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Book from './components/Book';
import Discover from './components/Discover';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Book />
      <Discover />
      <About />
      <Footer />
    </div>
  );
}

export default App;