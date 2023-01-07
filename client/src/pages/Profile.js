import React, { useState, useEffect } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { UserPlus, Check } from 'react-feather';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import UserWidget from '../components/UserWidget';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const Profile = () => {
  // retrieve user information
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};
  const posts = user?.posts || [];

  // follow users feature
  const [addFriend] = useMutation(ADD_FRIEND);
  const [followed, setFollowed] = useState(false);

  // maintain `following` state for follow button
  // useEffect(() => {
  //   if (userParam && user.friends.includes((friend) => friend._id === user._id)) {
  //     setFollowed(true);
  //   } else {
  //     setFollowed(false);
  //   }
  // }, [userParam, user]);

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
      setFollowed(true);
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

  if (!user?.username || !Auth.loggedIn()) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center px-8">
        <h1 className="mb-4">Error</h1>
        <p className="text-center">You need to be logged in to see this page.</p>
        <p className="text-center">Please <Link to="/signup" className="text-teal-400 hover:text-gray-700">create an account</Link> or <Link to="/login" className="text-teal-400 hover:text-gray-700">log in</Link>.</p>
      </div>
    );
  };

  return (
    <Layout>
      <div className="w-full h-full min-h-screen">
        <div className="profile w-full max-w-screen-xl mx-auto pt-[120px] px-8 flex flex-col-reverse md:flex-row justify-center items-start">
          <div className="w-full max-w-screen-md py-8 pr-0 md:pr-4">
            {/* IF USER IS LOGGED IN, DISPLAY POST FORM */}
            {!userParam && <PostForm />}
            {/* DISPLAY USER'S POSTS */}
            {user.username && posts?.map(post => (
              <div key={post._id}>
                <PostList post={post} />
              </div>
            ))}
          </div>
          {/* DISPLAY USER INFO */}
          <div className="w-full md:w-80 mt-12 mb-4 bg-gray-50 flex flex-wrap justify-center items-center rounded-lg shadow-lg">
            <UserWidget
              username={user.username}
              location={user.location}
              description={user.description}
              friendCount={user.friendCount}
              friends={user.friends}
            />
            {userParam && (
              <div className="w-full flex justify-start pb-4 px-4">
                {followed ? (
                  <button disabled className="btn">
                    <div className="w-full h-full inline-flex items-center font-normal">
                      <Check width={13} className="mr-1" /> Following
                    </div>
                  </button>
                ) : (
                  <button onClick={handleClick} className="btn">
                    <div className="w-full h-full inline-flex items-center font-normal">
                      <UserPlus width={13} className="mr-1" /> Follow
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;