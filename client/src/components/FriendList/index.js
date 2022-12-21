import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
  return (
    <>
      <div className="mb-8 flex items-center">
        <div className="mr-4">
          <img
            src="https://randomuser.me/api/portraits/women/18.jpg"
            alt="user icon"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div>
          <h1 className="mb-2 text-gray-600 text-left">{username}</h1>
          <div className="w-full flex justify-start">
            <div className="mr-6">
              <p className="text-sm text-gray-400">{friendCount} {friendCount === 1 ? 'follower' : 'followers'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">{friendCount} following</p>
            </div>
          </div>
        </div>
      </div>
      {friends.map(friend => (
        <button className="btn w-100 display-block mb-2 transition-all ease-in duration-300 hover:opacity-70" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </>
  );
};

export default FriendList;