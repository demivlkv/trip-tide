import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Layout from '../components/Layout/Dashboard';
import FriendList from '../components/FriendList';
import PostList from '../components/PostList';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
      variables: { username: userParam }
    });
  
    const user = data?.user || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <Layout>
      <div className="w-full h-full md:h-screen">
        <div className="w-full">
            <div className="flex-row mb-3">
                <h2 className="font-semibold uppercase">
                    Viewing {user.username}'s profile.
                </h2>
            </div>

            <div className="flex-row justify-between mb-3">
                {/* DISPLAY USER'S POSTS */}
                <div className="w-1/2">
                    <PostList posts={user.posts} title={`${user.username}'s posts...`} />
                </div>

                {/* DISPLAY USER'S FOLLOWERS */}
                <div className="w-1/3 mx-4 p-4 bg-gray-100 rounded">
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