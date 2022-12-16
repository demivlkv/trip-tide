// save book data for a logged in user
export const savePlace = (placeData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(placeData),
  });
};

// remove saved book data for a logged in user
export const deletePlace = (placeId, token) => {
  return fetch(`/api/users/place/${placeId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to amadeus API
export const searchPlaces = (query) => {
  return fetch(`test.api.amadeus.com/v1/shopping/activities?name=${query}`);
};