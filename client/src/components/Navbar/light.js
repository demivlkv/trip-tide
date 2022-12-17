import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Auth from '../../utils/auth';
// import icons
import { MagnifyingGlassIcon, UserCircleIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

const LightNavbar = () => {
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
				'w-full h-[80px] absolute px-4 flex justify-between items-center text-white z-[5]'
			}>
				<div className="logo">
					<h2 className="font-semibold uppercase">
						<a href="/" className="text-4xl hover:text-teal-200">
							Trip Tide
						</a>
					</h2>
				</div>

				<ul className="hidden md:flex">
					<Link to="home" smooth={true} duration={500}><li>Home</li></Link>
					<Link to="book" smooth={true} duration={500}><li>Book</li></Link>
					<Link to="discover" smooth={true} duration={500}><li>Discover</li></Link>
					<Link to="about" smooth={true} duration={500}><li>Our Story</li></Link>
				</ul>

				<div className="nav-icons hidden md:flex">
				<ul className="hidden md:flex justify-center items-center">
					{Auth.loggedIn() ? (
						<>
							<a href="/profile"><li><UserCircleIcon width={30} /></li></a>
							<a href="/" onClick={logout}><li className="logout-light">Logout</li></a>
						</>
					) : (
						<>
							<a href="/login"><li>Login</li></a>
							<a href="/signup"><li>Signup</li></a>
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
						<Link to="home" smooth={true} duration={500}><li>Home</li></Link>
						<Link to="book" smooth={true} duration={500}><li>Book</li></Link>
						<Link to="discover" smooth={true} duration={500}><li>Discover</li></Link>
						<Link to="about" smooth={true} duration={500}><li>Our Story</li></Link>
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

export default LightNavbar;
