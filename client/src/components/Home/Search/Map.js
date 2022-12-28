import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useMediaQuery } from '@material-ui/core';
import { MapPin } from 'react-feather';
import { Rating } from "@material-ui/lab";

import mapStyles from './MapStyles'

const containerStyle = {
  width: '100%',
  height: '75vh'
};

const Map = ({ coords, setCoords, setBounds, places, setChildClicked }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY
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
        options={{ disableDefaultUI: true, zoomControl: true, styles : mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className=""
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop 
              ? <MapPin width={18} />
              : (
                <div className="w-full shadow-lg z-10">
                  <h3>{place.name}</h3>
                  <img
                    className=""
                    src={place.photo ? place.photo.images.larg.url : 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
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