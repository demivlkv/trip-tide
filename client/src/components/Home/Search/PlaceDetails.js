import React from 'react';
import { MapPin, Phone } from 'react-feather';
import Rating from '@mui/material/Rating'

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  
  return (
    <div className="w-full card-wrapper">
      <div className="h-[350px]">
        <img 
          src={place?.photo ? place.photo.images.larg.url : 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}
          alt={place.name}
        />
      </div>
      <div className="place-details">
        <h2>{place.name}</h2>
        <div className="flex justify-between">
          <div><Rating value={Number(place.rating)} readOnly /></div>
          <div>out of {place.num_reviews}</div>
        </div>
        <div className="flex justify-between">
          <div>Price</div>
          <div>{place.price_level}</div>
        </div>
        <div className="flex justify-between">
          <div>Ranking</div>
          <div>{place.ranking}</div>
        </div>
        {place?.cuisine?.map(({ name }) => (
          <button key={name} label={name} className="py-2 px-1 rounded-full bg-gray-100" />
        ))}
        {place?.address && (
          <div>
            <MapPin width={18} /> {place.address}
          </div>
        )}
        {place?.phone && (
          <div>
            <Phone width={18} /> {place.phone}
          </div>
        )}
      </div>
      <div className="card-links">
        {place?.web_url && (
          <button onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </button>
        )}
        {place?.website && (
          <button onClick={() => window.open(place.website, '_blank')}>
            Website
          </button>
        )}
      </div>
    </div>
  );
};

export default PlaceDetails;