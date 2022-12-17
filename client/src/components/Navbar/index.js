import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
// import icons
import { MagnifyingGlassIcon, UserCircleIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

const DarkNavbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

	const logout = event => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		<nav name="home" className="navbar">
			<div className={nav ?
				'bg-[#f8f8f8de] w-full h-[80px] absolute px-4 flex justify-between items-center transition-all ease-in-out delay-100 duration-300 z-[5]'
				:
				'w-full h-[80px] absolute px-4 flex justify-between items-center z-[5]'
			}>
				<div className="logo">
					<h2 className="font-semibold uppercase">
						<a href="/" className="text-4xl hover:text-teal-200">
							Trip Tide
						</a>
					</h2>
				</div>

				<ul className="hidden md:flex">
					<Link to="/blog"><li>Destinations</li></Link>
					<Link to="#"><li>Cities</li></Link>
					<Link to="#"><li>Travel Tips</li></Link>
					<Link to="#"><li>Resources</li></Link>
				</ul>

				<div className="nav-icons hidden md:flex">
					<ul className="hidden md:flex justify-center items-center">
					{Auth.loggedIn() ? (
						<>
							<Link to="/profile"><li><UserCircleIcon width={30} /></li></Link>
							<a href="/" onClick={logout}><li className="logout">Logout</li></a>
						</>
					) : (
						<>
							<Link to="/login"><li>Login</li></Link>
							<Link to="/signup"><li>Signup</li></Link>
						</>
					)}
					</ul>
				</div>

				{/* HAMBURGER MENU */}
				<div className="hamburger-menu md:hidden hover:cursor-pointer" onClick={handleNav}>
					{!nav ? (<Bars2Icon width={30} />) : (<XMarkIcon width={30} />)}
				</div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
					<ul className="my-4">
						<Link to="/blog"><li>Destinations</li></Link>
						<Link to="#"><li>Cities</li></Link>
						<Link to="#"><li>Travel Tips</li></Link>
						<Link to="#"><li>Resources</li></Link>
					</ul>
          <div className="mobile-btm w-full py-4">
            <button className="primary w-[90%] m-4 text-center uppercase tracking-widest">Search</button>
            <button className="primary w-[90%] m-4 text-center uppercase tracking-widest">Account</button>

            <div className="social-icons flex justify-around my-4">
              <Facebook size={25} className="icon" />
              <Instagram size={25} className="icon" />
              <Twitter size={25} className="icon" />
              <Youtube size={25} className="icon" />
            </div>
        	</div>
				</div>
			</div>
		</nav>
	);
};

export default DarkNavbar;