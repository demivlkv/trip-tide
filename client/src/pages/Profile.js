import React from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
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
  // retrieve user information
  const [addFriend] = useMutation(ADD_FRIEND);
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};
  const posts = user?.posts || [];

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  };
  
  if (loading) {
    return <div>Loading...</div>;
  };

  if (!user?.username) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center px-8">
        <h1 className="mb-4">Error</h1>
        <p className="text-center">You need to be logged in to see this page.</p>
        <p className="text-center">Please <Link to="/signup" className="text-teal-400 hover:text-gray-700">create an account</Link> or <Link to="/login" className="text-teal-400 hover:text-gray-700">log in</Link>.</p>
      </div>
    );
  };

  console.log(user?.username);
  console.log(userParam);
  console.log(user);

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

          <div className="relative w-full p-4 flex justify-center">
            <div className="w-full max-w-screen-md mx-4 p-4">
              {/* IF USER IS LOGGED IN, DISPLAY POST FORM */}
              {!userParam && <PostForm />}
              {/* DISPLAY USER'S POSTS */}
              {posts.map(post => (
                <div key={post._id}>
                  <PostList post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;