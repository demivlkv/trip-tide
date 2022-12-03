import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/PostList.js';

const Homme = () => {
  // utilize useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  return (
    <>
      <div className="flex-row justify-space-between">
        <div className="w-1/2">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Post your travel experiences, tips, & recommendations!" />
          )}
        </div>
      </div>
    </>
  );
};

export default Homme;