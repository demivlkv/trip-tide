import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
    const [commentBody, setBody] = useState('');
    const [addComment] = useMutation(ADD_COMMENT);
      
    const handleFormSubmit = async event => {
      event.preventDefault();
      try{
          await addComment({
              variables: { commentBody, postId }
          });
          setBody('');
      } catch (e) {
          console.log(e);
      }
    };

  return (
    <div className="comment-form my-8">
      <form className="mb-8 flex flex-col justify-center" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Write a comment..."
          value={commentBody}
          onChange={(e) => setBody(e.target.value)}
          className="h-[5vh] mb-4"
        ></textarea>

        <button className="primary w-full" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;