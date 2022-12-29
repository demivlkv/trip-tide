import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Auth from '../../utils/auth';
// import icons
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

const HomeNavbar = () => {
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
					<Link to="search" smooth={true} duration={500}><li>Search</li></Link>
					<Link to="book" smooth={true} duration={500}><li>Book</li></Link>
					<Link to="discover" smooth={true} duration={500}><li>Discover</li></Link>
					<Link to="about" smooth={true} duration={500}><li>Our Story</li></Link>
				</ul>

				<div className="nav-icons hidden md:flex">
					<ul className="hidden md:flex justify-center items-center">
						{Auth.loggedIn() ? (
							<>
								<a href="/blog"><li>Blog</li></a>
								<a href="/profile"><li className="mr-2">Profile</li></a>
								<a href="/" onClick={logout}><li className="logout-btn">Logout</li></a>
							</>
						) : (
							<>
								<a href="/blog"><li>Blog</li></a>
								<a href="/login"><li className="login-btn">Login</li></a>
								<a href="/signup"><li className="signup-btn">Signup</li></a>
							</>
						)}
					</ul>
				</div>

				{/* HAMBURGER MENU */}
				<div className="hamburger-menu md:hidden hover:cursor-pointer" onClick={handleNav}>
					{!nav ? (<Bars2Icon width={30} />) : (<XMarkIcon width={30} />)}
				</div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
					<ul className="primary my-4">
						<Link to="home" smooth={true} duration={500}><li>Home</li></Link>
						<Link to="book" smooth={true} duration={500}><li>Book</li></Link>
						<Link to="discover" smooth={true} duration={500}><li>Discover</li></Link>
						<Link to="about" smooth={true} duration={500}><li>Our Story</li></Link>
						<a href="/blog"><li>Blog</li></a>
						<a href="/profile"><li>Profile</li></a>
					</ul>

					<ul className="secondary my-4">
						{Auth.loggedIn() ? (
							<>
								<a href="/" onClick={logout}><li className="logout-btn">Logout</li></a>
							</>
						) : (
							<>
								<a href="/login"><li className="login-btn">Login</li></a>
								<a href="/signup"><li className="signup-btn">Signup</li></a>
							</>
						)}
					</ul>

				</div>
			</div>
		</nav>
	);
};

export default HomeNavbar;
