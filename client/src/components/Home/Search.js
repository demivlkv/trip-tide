import React, { useEffect, useState } from 'react';

import { getPlaceData } from '../../utils/API';
import SearchBar from './Search/SearchBar';
import List from './Search/List';
import Map from './Search/Map';

const Search = () => {
	const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [nearbyType, setNearbyType] = useState('restaurants');
  const [rating, setRating] = useState('');

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState(null);

  const [loading, setLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoords({ lat: latitude, lng: longitude})
		})
	}, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating])

	useEffect(() => {
    if (bounds?.sw && bounds?.ne) {
      setLoading(true);

      getPlaceData(nearbyType, bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data);
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setLoading(false);
      })
    }
	}, [nearbyType, bounds]);

  return (
    <div name="search" className="search w-full h-full md:h-screen relative p-8">
      <div className="w-full h-full">
        <SearchBar setCoords={setCoords} />
				<div className="flex items-center">
					<List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            loading={loading}
            nearbyType={nearbyType}
            setNearbyType={setNearbyType}
            rating={rating}
            setRating={setRating}
          />
				</div>
				<div className="flex items-center">
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
  )
}

export default Search;