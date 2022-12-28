import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = ({ setCoords }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

	return (
		<div className="mb-12 flex justify-center items-center">
      <form className="max-w-[700px] w-full bg-[#ffffffcc] mt-4 p-1 flex justify-between items-center rounded-md">
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search destinations"
              className="w-[360px] md:w-[550px] text-gray-800 focus:outline-none"
            />
          </div>
        </Autocomplete>
        <div>
          <button className="primary rounded">
            <MagnifyingGlassIcon width={25} />
          </button>
        </div>
      </form>
    </div>
	);
};

export default SearchBar;