import React from 'react';
import Navbar from '../Navbar/DashboardNavbar';
import DashboardBg from '../../assets/dashboard-bg.jpeg';

const Dashboard = ({ children }) => {
  return (
    <>
      <div className="w-full h-full">
        <img
          src={DashboardBg}
          alt="Ocean waves"
          className="fixed w-full h-full object-top object-cover z-[-1]"
        />
        <div className="fixed w-full h-screen opacity-40 top-0 left-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <Navbar />
        <div className="relative">
          {children}
        </div>
      </div>
    </>
  );
};

export default Dashboard;