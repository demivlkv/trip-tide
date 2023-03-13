import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

import { QUERY_ME } from '../../utils/queries';
import LikeButton from '../LikeButton';
import DeleteButton from '../DeleteButton';

const PostList = ({ post: { _id, username, postTitle, postText, createdAt, commentCount, author, likes, likeCount } }) => {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  console.log(author.avatar)

  function deletePostCallback() {
    window.location.assign('/blog');
  }

  return (
    <>
      <article key={_id} className="bg-gray-50 mx-1 my-4 p-4 break-inside-avoid flex flex-col rounded-lg shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={author.avatar ? `${author.avatar}` : `https://images.unsplash.com/photo-1620750034602-1ad42e46b86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`}
              alt={username}
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
          <div className="mt-4 pt-4 flex justify-between items-center text-gray-400 text-xs md:text-sm border-t border-gray-200">
            <div className="inline-flex">
              <Link to={`/post/${_id}`} className="mr-4 flex items-center hover:text-teal-400">
                <ChatBubbleLeftRightIcon width={20} className="mr-1" /> {commentCount} {commentCount === 1 ? 'comment' : 'comments' }
              </Link>

              <LikeButton user={user} post={{ _id, likes, likeCount }} />
            </div>
            <div>
              {/* gives user the option to delete their own post */}
              {user && user.username === username && (
                <DeleteButton postId={_id} callback={deletePostCallback} />
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostList;