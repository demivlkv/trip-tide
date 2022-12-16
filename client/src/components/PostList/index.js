import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ChatBubbleLeftRightIcon, TrashIcon } from '@heroicons/react/24/solid';

import { QUERY_ME } from '../../utils/queries';
import LikeButton from '../LikeButton';

const PostList = ({ post: { _id, postTitle, postText, createdAt, commentCount, username, likes, likeCount } }) => {
  const { username: userParam } = useParams();
  const { data } = useQuery(QUERY_ME, {
    variables: { username: userParam }
  });
  
  const user = data?.me || {};

  return (
    <>
      <article key={_id} className="bg-gray-50 mx-1 my-2 p-4 break-inside-avoid flex flex-col rounded-md shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src="https://randomuser.me/api/portraits/women/18.jpg"
              alt="user icon"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div>
            <Link
              to={`/profile/${username}`}
              className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
            >
              {username}
            </Link>
            <p className="text-gray-400 text-sm">{createdAt}</p>
          </div>
        </div>
        <h3 className="my-4">
          <Link
            to={`/post/${_id}`}
            className="text-left hover:text-teal-300"
          >
            {postTitle}
          </Link>
        </h3>
        <div className="card-body">
          <p>{postText}</p>
          <div className="mt-4 p-3 flex justify-between items-center bg-gray-100 text-gray-500 rounded text-xs md:text-sm">
            <Link to={`/post/${_id}`} className="flex items-center text-teal-400 hover:text-gray-500">
              <ChatBubbleLeftRightIcon width={20} className="mr-1" /> {commentCount} {commentCount === 1 ? 'comment' : 'comments' }
            </Link>

            <LikeButton user={user} post={{ _id, likes, likeCount}} />

            {user && user.username === username && (
              <div className="inline-flex items-center">
                <TrashIcon width={20} onClick={() => console.log('Delete post')} className="text-red-600" />{' '}
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default PostList;