import React from 'react';

const Dashboard = ({ children }) => {
  return (
    <>
       <div className="relative">
          {children}
       </div>
    </>
  );
};

export default Dashboard;