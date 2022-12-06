import React from 'react';
import LightNavbar from '../Navbar/light';
import Hero from '../Home/Hero';
import Book from '../Home/Book';
import Discover from '../Home/Discover';
import About from '../Home/About';

const Home = () => {
  return (
    <>
        <LightNavbar />
        <Hero />
        <Book />
        <Discover />
        <About />
    </>
  );
};

export default Home;