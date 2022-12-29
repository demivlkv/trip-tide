import React from 'react';
import Data from './Data/Book-Data';

const Book = () => {
	const destinations = Data;

	// display return date if `round trip` is selected
	const roundTripHandleChange = event => {
    document.getElementById('return-date').style.visibility =
		event.checked && event.id === 'round-trip' ? 'hidden' : 'visible';
  };

	// hide return date if `one way` is selected
	const oneWayHandleChange = event => {
    document.getElementById('return-date').style.visibility =
		event.checked && event.id === 'one-way' ? 'visible' : 'hidden';
  };

	return (
		<div name="book" className="book w-full h-full md:h-screen relative p-8">
			<div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">
				<h1>
					Spend Less. Travel More.
				</h1>

				<div className="w-full md:max-w-screen-lg flex flex-row flex-wrap justify-center items-center">
					{/* SEARCH DESTINATIONS */}
					<div className="w-full md:max-w-screen-md">
						<form className="search-form w-full mx-auto grid grid-cols-1 md:grid-cols-3 mb-4">
							<div className="col-span-1 md:col-span-3">
								<input
									type="radio"
									id="round-trip"
									name="trip-type"
									value="round-trip"
									onChange={roundTripHandleChange}
									defaultChecked
								/>
								<label for="round-trip" className="pl-2 pr-6">
									Round-Trip
								</label>
								<input
									type="radio"
									id="one-way"
									name="trip-type"
									value="one-way"
									onChange={oneWayHandleChange}
								/>
								<label for="one-way" className="pl-2">
									One-Way
								</label>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-4 py-4 place-items-stretch">
								<div>
									<label className="block">From</label>
									<input type="text" placeholder="Origin city or airport" />
								</div>
								<div>
									<label className="block">To</label>
									<input
										type="text"
										placeholder="Destination city or airport"
									/>
								</div>
								<div>
									<label className="block">Passengers</label>
									<select>
										<option value="1">1 Passenger</option>
										<option value="1">2 Passengers</option>
										<option value="1">3 Passengers</option>
										<option value="1">4 Passengers</option>
										<option value="1">5 Passengers</option>
										<option value="1">6 Passengers</option>
										<option value="1">7 Passengers</option>
										<option value="1">8 Passengers</option>
										<option value="1">9 Passengers</option>
									</select>
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-4 pb-4 place-items-stretch">
								<div id="departure-date" className="w-full">
									<label className="block">Departure Date</label>
									<input type="date" />
								</div>
								<div id="return-date" className="w-full">
									<label className="block">Return Date</label>
									<input type="date" />
								</div>
								<div className="pt-6">
									<button className="primary w-full h-[43px]">Find Your Trip</button>
								</div>
							</div>
						</form>
					</div>

					{/* SEARCH DEALS */}
          <div className="w-full">
              <h2 className="mb-8 text-teal-400 text-center">
                  Don't miss these deals
              </h2>
          </div>

					<div className="images grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
						{destinations.map((city) => (
							<div className="max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300">
								<img src={city.image} alt={city.imgAlt} className="w-full" />
								<div className="p-4">
									<div className="flex justify-between items-center">
										<div className="font-semibold text-xl">{city.name}</div>
										<div className="text-teal-400 font-semibold text-xl">
											{city.price}
										</div>
									</div>
									<div className="flex justify-between items-center text-gray-500 text-xs">
										<div>{city.deal}</div>
										<div>per person</div>
									</div>
									<button className="primary w-full mt-4">View Deal</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
