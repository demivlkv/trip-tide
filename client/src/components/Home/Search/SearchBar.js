import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = ({ onLoad, onPlaceChanged }) => {
	return (
		<div className="search-bar w-full mb-4 flex justify-center items-center">
      <form className="w-[500px]">
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="relative">
						<div className="icons">
              <MagnifyingGlassIcon width={24} className="text-teal-400" />
						</div>
            <input
              type="text"
              name="search"
              placeholder="Search destinations"
              className="pl-10 text-gray-800 focus:outline-none"
            />
          </div>
        </Autocomplete>
      </form>
    </div>
	);
};

export default SearchBar;