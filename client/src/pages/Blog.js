import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Blog';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Home = () => {
  // utilize useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const loggedIn = Auth.loggedIn();

  return (
    <Layout>
      <div className="w-full h-full p-4 flex flex-col justify-center items-center">
        <div className="mt-[120px] mx-8">
          {loggedIn && (
            <div className="mb-8">
              <PostForm />
            </div>
          )}
          <div className={`w-full flex flex-row flex-wrap justify-center items-start ${loggedIn && ''}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Turning travel passions into travel plans" />
          )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;