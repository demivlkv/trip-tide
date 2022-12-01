import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Discover from './components/Discover';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Discover />
    </div>
  );
}

export default App;