import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { HeartIcon } from '@heroicons/react/24/solid';

import Auth from '../../utils/auth';
import { LIKE_POST } from '../../utils/mutations';

const LikeButton = ({ user, post: { _id, likeCount, likes } }) => {
  const [liked, setLiked] = useState(false);
    useEffect(() => {
      if (user && likes.find(like => like.username === user.username)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }, [user, likes]);

    const [likePost] = useMutation(LIKE_POST, {
      variables: { postId: _id }
    });

    const likeButton = user && Auth.loggedIn() ? (
      liked ? (
          <HeartIcon className="w-5 h-5 text-red-500 mr-1" />
      ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-red-500 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
      ) 
    ) : (
      <Link to="/login">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </Link>
    );

  return (
    <div className="flex items-center">
      <button className="inline-flex items-center" onClick={likePost}>
        {likeButton}
        {likeCount}
      </button>
    </div>
  );
};

export default LikeButton;