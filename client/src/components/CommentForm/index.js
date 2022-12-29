import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { X } from 'react-feather';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);
  const [commentBody, setBody] = useState('');
  const [addComment] = useMutation(ADD_COMMENT);
      
  const handleFormSubmit = async event => {
    event.preventDefault();
    try{
        await addComment({
            variables: { commentBody, postId }
        });
        setBody('');
        setShowModal(false);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <div className="comment-form my-8 w-full max-w-md">
      <input placeholder="Write a comment..." onClick={() => setShowModal(true)} className="input" />
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
                <h1 className="text-3xl">Add a Comment</h1>
                <form className="w-full px-4 pb-2 flex flex-col justify-center" onSubmit={handleFormSubmit}>
                  <textarea
                    placeholder="Write a comment..."
                    value={commentBody}
                    onChange={(e) => setBody(e.target.value)}
                    className="h-[14vh] mb-4"
                  ></textarea>
                  <button className="primary mt-2" type="submit" disabled={commentBody.trim() === ''}>
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CommentForm;