import React, { useState, useEffect, createRef } from 'react';

import PlaceDetails from './PlaceDetails';

const List = ({ places, type, setType, rating, setRating, childClicked, loading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places])

  return (
    <div className="list">
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
      {/* OPTIONS TO SHOW NEARBY PLACES */}
      <form className="w-full mb-8 flex items-center">
        <label for="nearby">Attractions, Restaurants, & Hotels Near You</label>
        <select name="nearby" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="attractions">Attractions</option>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
        </select>
      </form>
      {/* OPTIONS FOR SHOW PLACES BY RATING */}
      <form className="w-full mb-8 flex items-center">
        <label for="nearby">Rating</label>
        <select name="nearby" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </form>
      {/* DISPLAY RESULTS */}
      <div className="w-full">
        {places?.map((place, i) => (
          <div key={i} ref={elRefs[i]}>
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