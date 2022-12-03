import React from 'react';

const Dashboard = ({ children }) => {
  return (
    <>
       <div className="relative w-full h-full md:h-screen">
        <div className="navbar-bg"></div>
          {children}
       </div>
    </>
  );
};

export default Dashboard;