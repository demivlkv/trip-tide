import React, { useState } from 'react';

const PostForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = event => {
    if (event.target.value.length <= 1000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    setText('');
    setCharacterCount(0);
  }

  return (
    <div>
        <p className={`m-0 ${characterCount === 1000 ? 'text-blue-400' : ''}`}>Character Count: {characterCount}/1000</p>
        <form className="flex flex-col justify-center" onSubmit={handleFormSubmit}>
            <textarea
                placeholder="Post here"
                value={postText}
                onChange={handleChange}
                className="w-[500px] mb-4"
            ></textarea>
            <button>
                Post
            </button>
        </form>
    </div>
  );
};

export default PostForm;