import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
  const [postTitle, setTitle] = useState('');
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  
  const [addPost, { error }] = useMutation(ADD_POST, {
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
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_POSTS,
        data: { posts: [addPost, ...posts] }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 1000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

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
      setCharacterCount(0);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="post-form">
        <p className={`m-0 ${characterCount === 1000 || error ? 'text-blue-400' : ''}`}>
          Character Count: {characterCount}/1000
          {error && <span className="mt-4 pl-2">Something went wrong...</span>}
        </p>

        <form className="w-full md:w-[40vw] flex flex-col justify-center" onSubmit={handleFormSubmit}>
          <label className="block">Title</label>
					<input
            type="text"
            placeholder="Enter title"
            value={postTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
              placeholder="Post here"
              value={postText}
              onChange={handleChange}
              className="h-[10vh] md:h-[14vh] mb-4"
          ></textarea>
          <button>
              Post
          </button>
        </form>
    </div>
  );
};

export default PostForm;