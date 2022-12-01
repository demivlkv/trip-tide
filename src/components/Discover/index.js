import React from 'react';
import Data from './data';

import Sample from '../../assets/images/maldives.jpg';

const Discover = () => {
	const destinations = Data;

	return (
		<div className="discover w-full h-full md:h-screen relative p-8">
			<div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">

				<h1>Discover Dreamy Destinations</h1>

				<div className="images grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
					{destinations.map((city) => (
						<div className="relative group max-w-sm rounded-md overflow-hidden shadow-lg opacity-80 hover:opacity-100 transition-all ease-in-out duration-300">
							<img src={Sample} alt={city.name} />

							<div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white z-[5]">
								<h2 className="font-semibold drop-shadow">
									{city.name}
								</h2>
								<div>
									<a href="#">Flights</a> &#8226;&nbsp;
									<a href="#">Hotels</a> &#8226;&nbsp;
									<a href="#">Cars</a>
								</div>
							</div>
                            {/* GRADIENT OVERLAY ON HOVER */}
							<div className="flex justify-center items-center transition-all ease-in duration-300 opacity-0 bg-gradient-to-t from-teal-200 via-sky-600 to-opacity-20 group-hover:opacity-60 absolute top-0 left-0 h-full w-full"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Discover;
