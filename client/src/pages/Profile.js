import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Plus } from 'react-feather';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import FriendList from '../components/FriendList';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const Profile = () => {
  const [addFriend] = useMutation(ADD_FRIEND);
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

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <div className="w-full h-full">
        <div className="profile w-full pt-[100px] flex flex-col justify-center items-start">
          {/* DISPLAY USER'S FOLLOWERS */}
          <div className="w-full max-w-screen-md mx-auto p-4">
            <div className="flex flex-row justify-between">
              <div>
                <FriendList
                  username={user.username}
                  friendCount={user.friendCount}
                  friends={user.friends}
                />
              </div>
              <div className="pt-6 flex items-start">
              {userParam && (
                <button onClick={handleClick} className="btn">
                  <div className="w-full h-full inline-flex items-center pr-1 font-normal">
                    <Plus width={16} className="mr-1" /> Follow
                  </div>
                </button>
              )}
              </div>
            </div>
          </div>

          <div className="relative w-full p-4 flex flex-row flex-wrap justify-center">
            <div className="w-full max-w-screen-lg mx-4 p-4">
              {/* IF USER IS LOGGED IN, DISPLAY POST FORM */}
              {!userParam && <PostForm />}
              {/* DISPLAY USER'S POSTS */}
              <PostList posts={user.posts} title={`${user.username}'s posts...`} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;