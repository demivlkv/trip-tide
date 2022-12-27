import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import { MapPin } from 'react-feather';
import Rating from '@mui/material/Rating';

import mapStyles from './MapStyles';

const Map = ({ coords, setCoords, setBounds, places, setChildClicked }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
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
                <div className="shadow-lg">
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
      </GoogleMapReact>
    </div>
  );
};

export default Map;