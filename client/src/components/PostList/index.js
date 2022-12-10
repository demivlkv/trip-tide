import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3 className="text-2xl font-semibold uppercase tracking-widest">No posts Yet</h3>;
  }

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
                <p className="text-gray-400">{post.createdAt}</p>
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
              <div className="mt-4 p-3 bg-gray-100 text-gray-500 rounded text-xs md:text-sm">
                <Link to={`/post/${post._id}`} className="text-teal-400 hover:text-gray-500">
                  {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments' }
                </Link>
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default PostList;