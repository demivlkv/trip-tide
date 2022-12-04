import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import FriendList from '../components/FriendList';
import PostList from '../components/PostList';

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  
  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in.
      </h4>
    );
  }

  return (
    <Layout>
      <div className="w-full h-screen">
        <div className="profile w-full pt-[100px] flex flex-col justify-center items-start">
          <div className="w-full flex justify-center">
            <h2 className="font-semibold uppercase">
                Viewing {userParam ? `${user.username}'s` : 'your'} profile.
            </h2>
          </div>

          <div className="relative w-full p-4 flex flex-row flex-wrap justify-center">
            {/* DISPLAY USER'S POSTS */}
            <div className="w-full md:w-1/2 md:max-w-screen-md mx-4 md:mr-2 p-4 bg-teal-200">
                <PostList posts={user.posts} title={`${user.username}'s posts...`} />
            </div>

            {/* DISPLAY USER'S FOLLOWERS */}
            <div className="w-full md:w-1/3 md:max-w-[400px] mx-4 md:ml-2 p-4 bg-gray-100 rounded">
                <FriendList
                  username={user.username}
                  friendCount={user.friendCount}
                  friends={user.friends}
                />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;