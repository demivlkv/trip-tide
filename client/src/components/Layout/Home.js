import React from 'react';
import Navbar from '../Navbar/HomeNavbar';
import Hero from '../Home/Hero';
import Book from '../Home/Book';
import Discover from '../Home/Discover';
import About from '../Home/About';

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Book />
        <Discover />
        <About />
    </>
  );
};

export default Home;