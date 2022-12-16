import React, { useEffect } from 'react';
import Axios from 'axios';

const Search = () => {
  const options = {
    method: 'GET',
    url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
    params: {address: 'Eiffel Tower'},
    headers: {
      'X-RapidAPI-Key': 'ab67ede97bmsh9b19263a31215e7p190892jsn01189afb67d3',
      'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    Axios.request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Search;