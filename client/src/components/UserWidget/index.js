import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Settings } from 'react-feather';

const UserWidget = ({ username, location, description, friends, friendCount }) => {
  return (
    <>
      <section className="w-full p-3 flex flex-col items-center">
        {/* PROFILE IMG */}
        <div className="w-full flex flex-wrap items-center">
          <img
            src="https://randomuser.me/api/portraits/women/18.jpg"
            alt="user icon"
            className="mr-3 w-20 h-20 rounded-full"
          />
          <div className="flex flex-col">
            <div className="inline-flex">
              <h3 className="mb-2 text-gray-600 text-left">{username}</h3>
              <Settings width="20" className="ml-3 mt-1 text-gray-400 hover:text-teal-300 transition-all ease-in duration-300 cursor-pointer" />
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
                    src="https://images.unsplash.com/photo-1632399201766-f5687a66af4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxvY2VhbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="user icon"
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <div className="w-full flex flex-col">
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