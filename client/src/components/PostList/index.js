import React from 'react';

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
            <p className="card-header">
              {post.username}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.postText}</p>
              <p className="mb-0">
                Comments: {post.commentCount} || Click to{' '}
                {post.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;