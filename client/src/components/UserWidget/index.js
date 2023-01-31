import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase } from 'react-feather';

const UserWidget = ({ username, location, description, avatar, friends, friendCount }) => {
  return (
    <>
      <section className="w-full p-3 flex flex-col items-center">
        {/* PROFILE IMG */}
        <div className="w-full flex flex-wrap items-center">
          <img
            src={avatar}
            alt={username}
            className="w-20 h-20 rounded-full"
          />
          <div className="flex flex-col ml-3">
            <div className="mb-2 text-gray-600 text-left">
              <h3>{username}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-400">{friendCount} following</p>
            </div>
          </div>
        </div>

        {/* USER LOCATION & BIO */}
        <div className="w-full mt-4 flex flex-col text-gray-400 text-sm">
          {location && (
            <div className="my-1 flex items-center">
              <MapPin width={18} className="text-gray-600 mr-2" /> {location}
            </div>
          )}
          {description && (
            <div className="flex items-center">
              <Briefcase width={18} className="text-gray-600 mr-2" />{description}
            </div>
          )}
        </div>
        {/* FRIEND LIST */}
        <div className="mt-4 mx-auto w-[95%] divide-y">
          {friends.map(friend => (
            <ul className="w-auto py-3 px-4 transition-all ease-in duration-300 hover:opacity-80">
              <li key={friend._id}>
                <div className="flex flex-row items-center text-sm">
                  <img
                    src={friend.avatar}
                    alt={friend.username}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2 w-full flex flex-col">
                    <Link to={`/profile/${friend.username}`} className="font-medium hover:text-teal-400">{friend.username}</Link>
                    <p className="text-gray-400 text-xs">{friend.description}</p>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};

export default UserWidget;