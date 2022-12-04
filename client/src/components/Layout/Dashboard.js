import React from 'react';
import Navbar from '../Navbar';

const Dashboard = ({ children }) => {
  return (
    <>
      <Navbar />
       <div className="relative">
          {children}
       </div>
    </>
  );
};

export default Dashboard;