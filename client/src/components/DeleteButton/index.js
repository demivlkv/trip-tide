import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TrashIcon } from '@heroicons/react/24/solid';
import { DELETE_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';

const DeleteButton = ({ postId, callback }) => {
  const [showModal, setShowModal] = useState(false);
  const [deletePost] = useMutation(DELETE_POST, {
    update(cache) {
      setShowModal(false);
      const data = cache.readQuery({
        query: QUERY_POSTS
      });
      const getPost = data.posts.filter((p) => p._id !== postId);
      cache.writeQuery({ query: QUERY_POSTS, data: { posts: [...getPost] } });

      // remove post from cache
      if (callback) callback();
    },
    variables: { postId }
  });

  return (
    <div className="flex items-center">
      <button className="inline-flex items-center">
        <TrashIcon width={20} onClick={() => setShowModal(true)} className="transition-all duration-300 ease-in hover:text-red-500" />{' '}
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
                <div className="relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg">
                  <div className="sm:flex">
                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="mt-2 text-center sm:ml-2 sm:text-left">
                      <h4 className="text-lg text-gray-800">
                        Are you sure you want to delete your post?
                      </h4>
                                        
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-gradient-to-br from-pink-600 to-orange-400 hover:opacity-70 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2 transition-all ease-in duration-300"
                          onClick={deletePost}
                        >
                          Delete
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 hover:opacity-70 rounded-md outline-none border ring-offset-2 ring-teal-300 focus:ring-2 transition-all ease-in duration-300"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default DeleteButton;