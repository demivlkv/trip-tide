import React from 'react';

const Blog = ({ children }) => {
  return (
    <>
       <div className="relative w-full h-full md:h-screen">
        <div className="navbar-bg"></div>
          {children}
       </div>
    </>
  );
};

export default Blog;