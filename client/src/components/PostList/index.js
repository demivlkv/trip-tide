import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3 className="text-2xl font-semibold uppercase tracking-widest">No posts Yet</h3>;
  }

  return (
    <>
      <h3 className="text-2xl font-semibold uppercase tracking-widest">{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <h4>{post.postTitle}</h4>
            <p className="mb-4 text-gray-400 text-sm">
              <Link
                to={`/profile/${post.username}`}
                className="text-teal-400 hover:text-gray-500"
              >
                {post.username}
              </Link>{' '}
              posted on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mt-4 text-sm">
                  {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments' }
                </p>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;