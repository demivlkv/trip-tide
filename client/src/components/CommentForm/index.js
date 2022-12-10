import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 1000) {
          setBody(event.target.value);
          setCharacterCount(event.target.value.length);
        }
      };
      
      const handleFormSubmit = async event => {
        event.preventDefault();

        try{
            await addComment({
                variables: { commentBody, postId }
            });
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.log(e);
        }
      };

  return (
    <div className="comment-form mb-8">
      <p className={`m-0 ${characterCount === 1000 || error ? 'text-blue-400' : ''}`}>
        Character Count: {characterCount}/1000
        {error && <span className="mt-4 pl-2">Something went wrong...</span>}
      </p>
      <form className="flex flex-col justify-center" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Leave a comment to this post..."
          value={commentBody}
          onChange={handleChange}
          className="h-[10vh] md:h-[14vh] mb-4"
        ></textarea>

        <button className="w-full" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;