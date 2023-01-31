import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { X } from 'react-feather';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const [showModal, setShowModal] = useState(false);
  const [postTitle, setTitle] = useState('');
  const [postText, setText] = useState('');
  
  const [addPost] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {

      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (e) {
        console.warn('First post insertion by user!')
      }

      // update post array's cache
      const { posts } = cache.readQuery({ query: QUERY_POSTS });
      // prepend the newest post to the front of the array
      cache.writeQuery({
        query: QUERY_POSTS,
        data: { posts: [addPost, ...posts] }
      });
    }
  });

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add post to database
      await addPost({
        variables: { postTitle, postText }
      });
      // set clear form value
      setTitle('');
      setText('');
      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full px-1 flex items-center">
      <div className="w-20">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-14 h-14 rounded-full"
        />
      </div>
      <div className="post-form">
        <input placeholder="What's on your mind..." onClick={() => setShowModal(true)} className="input" />
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
                  <h1 className="text-3xl">Create New Post</h1>
                  <form className="w-full px-4 pb-2 flex flex-col justify-center" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      placeholder="Enter title"
                      value={postTitle}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                      placeholder="What's on your mind..."
                      value={postText}
                      onChange={(e) => setText(e.target.value)}
                      className="h-[14vh] mb-4"
                    ></textarea>
                    <button className="primary mt-2" disabled={postText.trim() === ''}>
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : null}
        </div>
      </div>
    </div>
  );
};

export default PostForm;