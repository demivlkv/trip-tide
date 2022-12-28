import React, { useState, useEffect, createRef } from 'react';

import PlaceDetails from './PlaceDetails';

const List = ({ places, nearbyType, setNearbyType, rating, setRating, childClicked, loading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs(Array(places?.length).fill().map((_, i) => elRefs[i] || createRef()));
  }, [places])

  return (
    <div className="list">
      <h2>Restaurants, Hotels, & Attractions</h2>
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
      {/* OPTIONS TO SHOW NEARBY PLACES */}
      <form className="w-full flex items-center">
        <label for="nearby" className="">Restaurants, Hotels, & Attractions Near You</label>
        <select name="nearby" value={nearbyType} onChange={(e) => setNearbyType(e.target.value)}>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </form>
      {/* OPTIONS FOR SHOW PLACES BY RATING */}
      <form className="w-full flex items-center">
        <label for="nearby">Rating</label>
        <select name="nearby" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </form>
      {/* DISPLAY RESULTS */}
      <div>
        {places?.map((place, i) => (
          <div key={i} refProp={elRefs[i]}>
            <PlaceDetails
              place={place}
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
            />
          </div>
        ))}
      </div>
      </>
      )}
    </div>
  );
};

export default List;