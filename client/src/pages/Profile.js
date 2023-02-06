import React, { useState, useEffect } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { UserPlus, UserMinus, Settings, X } from 'react-feather';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND, REMOVE_FRIEND, UPDATE_USER } from '../utils/mutations';
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
  const [following, setFollowing] = useState(false);
  const handleAddFriend = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
      setFollowing(true);
    } catch (e) {
      console.error(e);
    }
  };

  // unfollow users feature
  const [removeFriend] = useMutation(REMOVE_FRIEND);
  const handleRemoveFriend = async () => {
    try {
      await removeFriend({
        variables: { id: user._id }
      });
      setFollowing(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (user.friends?.find(friend => friend.username && userParam)) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  }, [user.friends, userParam]);

  // update profile feature
  const [showModal, setShowModal] = useState(false);
  const [userPic, setUserPic] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [userBio, setUserBio] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateUser({
        variables: {
          id: Auth.getProfile().data._id,
          input: {
            avatar: userPic,
            location: userLocation,
            description: userBio
          }
        },
      });
      setUserPic('');
      setUserLocation('');
      setUserBio('');
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
              avatar={user.avatar}
              friendCount={user.friendCount}
              friends={user.friends}
            />
            {userParam ? (
              <div className="w-full flex justify-start pb-4 px-4">
                <button onClick={following ? handleRemoveFriend : handleAddFriend} className="btn">
                  <div className="w-full h-full inline-flex items-center font-normal">
                    {following ? (
                      <>
                        <UserMinus width={13} className="mr-1" /> Unfollow
                      </>
                    ) : (
                      <>
                        <UserPlus width={13} className="mr-1" /> Follow
                      </>
                    )}
                  </div>
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-start pb-4 px-4">
                <button className="btn" onClick={() => setShowModal(true)}>
                  <div className="w-full h-full inline-flex items-center font-normal">
                    <Settings width={13} className="mr-1" /> Update Profile
                  </div>
                </button>
                <div className="flex items-center justify-center">
                  {showModal ? (
                    <>
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                          className="fixed inset-0 w-full h-full bg-black opacity-40"
                          onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow-lg">
                            <div className="mb-4 flex justify-end items-center text-gray-400 hover:text-teal-300 hover:cursor-pointer transition-all ease-in duration-300" onClick={() => setShowModal(false)}>
                              <X width={25} className="inline-flex items-center" />
                            </div>
                            <h1 className="text-3xl">Update Profile</h1>
                            <div className="update-form">
                            <form className="w-full px-4 pb-2 flex flex-col justify-center" onSubmit={handleFormSubmit}>
                              <input
                                type="text"
                                placeholder="Profile Picture URL"
                                value={userPic}
                                onChange={(e) => setUserPic(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Update Location"
                                value={userLocation}
                                onChange={(e) => setUserLocation(e.target.value)}
                              />
                              <input
                                type="text"
                                placeholder="Update Bio"
                                value={userBio}
                                onChange={(e) => setUserBio(e.target.value)}
                              />
                              <button className="primary mt-2">
                                Update
                              </button>
                            </form>
                            </div>
                          </div>
                        </div>
                      </div>
                     </>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;