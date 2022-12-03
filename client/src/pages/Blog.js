import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import Layout from '../components/Layout/Blog';
import PostList from '../components/PostList';

const Home = () => {
  // utilize useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  return (
    <Layout>
      <div className="w-full h-full md:h-screen">
        <div className="navbar-bg"></div>
        <div className="w-1/2 h-full flex justify-center items-center">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Turning travel passions into travel plans" />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;