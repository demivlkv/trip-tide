import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { HeartIcon } from '@heroicons/react/24/solid';

import { QUERY_ME } from '../../utils/queries';
import { LIKE_POST } from '../../utils/mutations';

const LikeButton = ({ post: { _id, likeCount, likes } }) => {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: _id }
  });

  // if user is logged in, give option to like a post; else, like button disabled
  const likeButton = user ? (
    liked ? (
      <HeartIcon className="liked-heart" />
    ) : (
      <HeartIcon className="unliked-heart" />
    ) 
  ) : (
    <HeartIcon className="unliked-heart" />
  );

  return (
    <div className="flex items-center">
      <button className="like-btn" onClick={likePost}>
        {likeButton}
        {likeCount} {likeCount === 1 ? 'like' : 'likes' }
      </button>
    </div>
  );
};

export default LikeButton;