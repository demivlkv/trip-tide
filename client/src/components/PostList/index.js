import React from 'react';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

import Auth from '../../utils/auth';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <div className="my-8 text-2xl text-center font-semibold uppercase tracking-widest">No posts Yet</div>;
  }

  function likePost() {

  };

  return (
    <>
      <div className="w-full mb-4 flex justify-center">
        <h2>{title}</h2>
      </div>
      {posts &&
        posts.map(post => (
          <article key={post._id} className="bg-gray-50 mx-1 my-2 p-4 break-inside-avoid flex flex-col rounded-md shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300">
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
                  to={`/profile/${post.username}`}
                  className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
                >
                  {post.username}
                </Link>
                <p className="text-gray-400 text-sm">{post.createdAt}</p>
              </div>
            </div>
            <h3 className="my-4">
              <Link
                to={`/post/${post._id}`}
                className="text-left hover:text-teal-300"
              >
                {post.postTitle}
              </Link>
            </h3>
            <div className="card-body">
              <p>{post.postText}</p>
              <div className="mt-4 p-3 flex justify-between items-center bg-gray-100 text-gray-500 rounded text-xs md:text-sm">
                <Link to={`/post/${post._id}`} className="flex items-center text-teal-400 hover:text-gray-500">
                  <ChatBubbleLeftRightIcon width={20} className="mr-1" /> {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments' }
                </Link>

                {Auth.loggedIn() ? (
                  <>
                    <div className="inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>{' '}
                      {post.likeCount} {post.likeCount === 1 ? 'like' : 'likes' }
                    </div>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {post.likeCount} {post.likeCount === 1 ? 'like' : 'likes' }
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default PostList;