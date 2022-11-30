import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon, Bars2Icon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

const Navbar = () => {
	return (
		<nav id="navbar">
			<div className="w-full h-[80px] px-4 flex justify-between items-center z-[5]">
				<div className="logo">
					<h2 className="text-gray-800 font-semibold uppercase">
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
				<div className="hamburger-menu md:hidden">
					<Bars2Icon width={30} />
				</div>

                <div className="mobile-menu w-full absolute top-[80px] left-0 flex flex-col justify-between bg-[#f8f8f8de]">
					<ul className="my-4">
						<li className="py-5 px-4 border-b border-gray-200">Home</li>
						<li className="py-5 px-4 border-b border-gray-200">Book</li>
						<li className="py-5 px-4 border-b border-gray-200">Contact</li>
					</ul>
                    <div className="mobile-btm w-full py-4">
                        <button className="w-[90%] m-4 text-center">Search</button>
                        <button className="w-[90%] m-4 text-center">Account</button>

                        <div className="social-icons flex justify-around my-4">
                            <Facebook size={20} className="icon" />
                            <Instagram size={20} className="icon" />
                            <Twitter size={20} className="icon" />
                            <Youtube size={20} className="icon" />
                        </div>
                    </div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
