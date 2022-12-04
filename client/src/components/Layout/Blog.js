import React from 'react';
import Navbar from '../Navbar';

const Blog = ({ children }) => {
  return (
    <>
      <Navbar />
       <div className="relative">
          {children}
       </div>
    </>
  );
};

export default Blog;