import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, Bars2Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
	return (
		<nav id="navbar">
			<div className="w-full h-[70px] px-4 flex justify-between items-center">
				<div className="logo">
					<h2 className="text-gray-800 font-semibold uppercase">
                        <a href="/" className="hover:text-teal-400">
                            Trip Tide
                        </a>
                    </h2>
				</div>

				<ul className="inline-flex">
					<li className="mx-2">Home</li>
					<li className="mx-2">Book</li>
					<li className="mx-2">Contact</li>
				</ul>

				<div className="nav-icons inline-flex">
					<MagnifyingGlassIcon width={28} className="mr-4" />
					<UserCircleIcon width={30} />
				</div>

                {/* HAMBURGER MENU */}
                <div className="hamburger-menu">
                    <Bars2Icon width={30} />
                </div>
			</div>
		</nav>
	);
};

export default Navbar;
