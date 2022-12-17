import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
    if (!friends || !friends.length) {
        return <p className="font-semibold uppercase tracking-widest">{username} has no followers</p>;
    }

  return (
    <div>
      <h4>
        {username}'s {friendCount} {friendCount === 1 ? 'follower' : 'followers'}
      </h4>
      {friends.map(friend => (
        <button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;