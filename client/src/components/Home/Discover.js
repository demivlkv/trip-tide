import React from 'react';
import Data from './Data/Discover-Data';

const Discover = () => {
	const destinations = Data;

	return (
		<div name="discover" className="discover w-full h-full md:h-screen relative p-8">
			<div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">

				<h1>Discover Dreamy Destinations</h1>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
					{destinations.map((city) => (
						<div className="images relative group max-w-sm rounded-md overflow-hidden opacity-80 hover:opacity-100 transition-all ease-in-out duration-300">
              <div className="overlay"></div>
							<img src={city.image} alt={city.name} />

							<div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center p-2 text-white z-[5]">
								<h2 className="text-2xl md:text-xl font-semibold drop-shadow">
									{city.name}
								</h2>
								<div>
									<a href="#">Flights</a> &#8226;&nbsp;
									<a href="#">Hotels</a> &#8226;&nbsp;
									<a href="#">Cars</a>
								</div>
							</div>
              {/* GRADIENT OVERLAY ON HOVER */}
							<div className="flex justify-center items-center transition-all ease-in duration-300 opacity-0 bg-gradient-to-t from-transparent via-gray-700 to-opacity-20 group-hover:opacity-60 absolute top-0 left-0 h-full w-full"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Discover;
