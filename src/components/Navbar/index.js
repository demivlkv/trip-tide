import React, { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

	return (
		<nav id="navbar">
			<div className={nav ?
				'bg-[#f8f8f8de] w-full h-[80px] absolute px-4 flex justify-between items-center transition-all ease-in-out delay-200 duration-400 z-[5]'
				:
				'w-full h-[80px] absolute px-4 flex justify-between items-center text-white z-[5]'
			}>
				<div className="logo">
					<h2 className="font-semibold uppercase">
						<a href="/" className="hover:text-teal-400">
							Trip Tide
						</a>
					</h2>
				</div>

				<ul className="hidden md:flex">
					<li>Home</li>
					<li>Book</li>
					<li>Contact</li>
				</ul>

				<div className="nav-icons hidden md:flex">
					<MagnifyingGlassIcon width={27} className="mr-4" />
					<UserCircleIcon width={30} />
				</div>

				{/* HAMBURGER MENU */}
				<div className="hamburger-menu md:hidden hover:cursor-pointer" onClick={handleNav}>
					{!nav ? (<Bars2Icon width={30} />) : (<XMarkIcon width={30} />)}
				</div>

                <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
					<ul className="my-4">
						<li className="py-5 px-4 border-b border-gray-400">Home</li>
						<li className="py-5 px-4 border-b border-gray-400">Book</li>
						<li className="py-5 px-4 border-b border-gray-400">Contact</li>
					</ul>
                    <div className="mobile-btm w-full py-4">
                        <button className="w-[90%] m-4 text-center uppercase tracking-widest">Search</button>
                        <button className="w-[90%] m-4 text-center uppercase tracking-widest">Account</button>

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

export default Navbar;
