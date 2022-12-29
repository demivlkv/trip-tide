import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_POSTS } from '../utils/queries';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Blog = () => {
  // utilize useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <Layout>
      <div className="w-full h-full min-h-screen p-4 flex flex-col justify-center items-center">
        <div className="w-full mt-[120px] mx-8 mb-8 flex flex-col justify-center items-center text-white">
          <h1>Blog</h1>
          <h2>Turning travel passions into travel plans</h2>
        </div>
        <div className="box-border max-w-screen-xl mx-4 mb-8 columns-1 md:columns-2 lg:columns-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
          {Auth.loggedIn() && (
            <div className="mb-8">
              <PostForm />
            </div>
          )}
          {posts.map((post) => (
            <div key={post._id}>
              <PostList post={post} />
            </div>
          ))}
          </>
        )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;