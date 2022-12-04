import React from 'react';

const Blog = ({ children }) => {
  return (
    <>
       <div className="relative">
          {children}
       </div>
    </>
  );
};

export default Blog;