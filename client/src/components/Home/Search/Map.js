import React from 'react';
import { GoogleMap, useLoadScript, OverlayView } from '@react-google-maps/api';
import { useMediaQuery } from '@mui/material';
import { MapPin } from 'react-feather';
import Rating from '@mui/material/Rating'

import mapStyles from './MapStyles'

const containerStyle = {
  width: '100%',
  height: '75vh'
};

const Map = ({ coords, setCoords, setBounds, places, setChildClicked }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const libraries = ['places'];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    libraries: libraries
  });

  if (!isLoaded) {
    return <div>Wait for it..........</div>
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultCenter={coords}
        center={coords}
        zoom={14}
        options={{ disableDefaultUI: true, styles : mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className="w-full h-full"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop 
              ? <MapPin width={18} className="text-teal-400" />
              : (
                <div className="w-[100px] p-2 flex flex-col justify-center bg-white shadow-lg z-[5]">
                  <h3>{place.name}</h3>
                  <img
                    className=""
                    src={place?.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
                    alt={place.name}
                  />
                  <Rating value={Number(place.rating)} readOnly />
                </div>
              )
            }
          </div>
        ))}
      </GoogleMap>
    </>
  );
};

export default Map;