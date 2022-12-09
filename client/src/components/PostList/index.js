import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3 className="text-2xl font-semibold uppercase tracking-widest">No posts Yet</h3>;
  }

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <h2>{title}</h2>
      </div>
      {posts &&
        posts.map(post => (
            <div key={post._id} className="w-full md:w-5/12 bg-gray-50 m-2 p-4 rounded-md shadow-lg">
              <h4 className="mb-4">
                <Link
                  to={`/post/${post._id}`}
                  className="text-left hover:text-teal-300"
                >
                  {post.postTitle}
                </Link>
              </h4>
              <div className="card-body">
                <p>{post.postText}</p>
                <div className="mt-4 p-3 bg-gray-100 text-gray-500 rounded text-xs md:text-sm">
                  <Link
                    to={`/profile/${post.username}`}
                    className="text-teal-400 hover:text-gray-500"
                  >
                    {post.username}
                  </Link>{' '}
                  posted on {post.createdAt} |{' '}
                  <Link to={`/post/${post._id}`} className="text-teal-400 hover:text-gray-500">
                    {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments' }
                  </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;