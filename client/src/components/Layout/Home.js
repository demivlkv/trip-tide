import React from 'react';
import LightNavbar from '../Navbar/light';
import Hero from '../Hero';
import Book from '../Book';
import Discover from '../Discover';
import About from '../About';

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