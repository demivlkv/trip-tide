import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
  return (
    <>
      <div className="w-full mt-12 p-3 flex flex-wrap items-center rounded-lg">
        <div className="w-24">
          <img
            src="https://randomuser.me/api/portraits/women/18.jpg"
            alt="user icon"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div>
          <h3 className="mb-2 text-gray-600 text-left">{username}</h3>
          {/* <div className="w-full flex justify-start"> */}
            {/* <div className="mr-6">
              <p className="text-sm text-gray-400">{friendCount} {friendCount === 1 ? 'follower' : 'followers'}</p>
            </div> */}
            <div>
              <p className="text-sm text-gray-400">{friendCount} following</p>
            </div>
          {/* </div> */}
        </div>
        <div className="mt-4 mx-auto w-[95%] divide-y">
          {friends.map(friend => (
            <ul className="w-auto py-3 px-4 transition-all ease-in duration-300 hover:opacity-80">
              <li key={friend._id}>
                <div className="w-14 flex items-center text-sm">
                  <img
                    src="https://images.unsplash.com/photo-1632399201766-f5687a66af4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxvY2VhbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="user icon"
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                  <Link to={`/profile/${friend.username}`} className="font-medium hover:text-teal-400">{friend.username}</Link>
                  <div className="text-gray-400 text-xs">{friend.username}</div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default FriendList;