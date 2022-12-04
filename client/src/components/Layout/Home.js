import React from 'react';
import Hero from '../Hero';
import Book from '../Book';
import Discover from '../Discover';
import About from '../About';
import LightNavbar from '../Navbar/light';

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