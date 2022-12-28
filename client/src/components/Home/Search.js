import React, { useEffect, useState } from 'react';

import { getPlaceData } from '../../utils/API';
import SearchBar from './Search/SearchBar';
import List from './Search/List';
import Map from './Search/Map';

const Search = () => {
	const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [type, setType] = useState('attractions');
  const [rating, setRating] = useState(0);

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState({});

  const [loading, setLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoords({ lat: latitude, lng: longitude })
		})
	}, []);

  useEffect(() => {
    setFilteredPlaces(places.filter((place) => place.rating > rating));
  }, [rating])

	useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);

      getPlaceData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data);
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setLoading(false);
      })
    }
	}, [type, bounds]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <div name="search" className="search w-full h-full md:h-screen relative p-4">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1>Let's Go</h1>
        <SearchBar onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
        <div className="w-full flex flex-wrap flex-row-reverse md:flex-nowrap md:flex-row justify-center items-start">
          <div className="w-full max-w-md">
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              loading={loading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </div>
          <div className="w-full max-w-5xl">
            <Map
              setCoords={setCoords}
              setBounds={setBounds}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </div>
        </div>
			</div>
    </div>
  );
};

export default Search;