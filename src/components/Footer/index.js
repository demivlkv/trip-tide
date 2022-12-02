import React from 'react';
//import icons
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

const Footer = () => {
  return (
    <div className="footer w-full px-4 py-8 bg-gray-800 text-white">
        <div className="w-full">
            <div className="upper">
                <h3 className="text-teal-200 text-xl font-semibold uppercase">Trip Tide</h3>
                <div className="social">
                    <Facebook size={25} className="icon" />
                    <Instagram size={25} className="icon" />
                    <Twitter size={25} className="icon" />
                    <Youtube size={25} className="icon" />
                </div>
            </div>
            <div className="lower">
                <div className="left">
                    <ul>
                        <li>About</li>
                        <li>Partnership</li>
                        <li>Careers</li>
                        <li>Press Center</li>
                        <li>Advertise</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Privacy & Terms</li>
                        <li>Policy</li>
                        <li>Help Center</li>
                        <li>Terms</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;