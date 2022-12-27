import React from 'react';
import Navbar from '../Navbar/HomeNavbar';
import Hero from './Hero';
import Search from './Search';
import Book from './Book';
import Discover from './Discover';
import About from './About';

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Search />
        <Book />
        <Discover />
        <About />
    </>
  );
};

export default Home;