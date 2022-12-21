import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
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
      // prepend the newest thought to the front of the array
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full px-1 flex items-center">
      <div className="w-20">
        <img
          src="https://randomuser.me/api/portraits/women/18.jpg"
          alt="user icon"
          className="w-14 h-14 rounded-full"
        />
      </div>
    <div className="post-form">
      <form className="w-full flex flex-col justify-center" onSubmit={handleFormSubmit}>
        <label className="block">Title</label>
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
            className="h-[5vh] mb-4"
        ></textarea>
        <button className="primary">
          Post
        </button>
      </form>
    </div>
    </div>
  );
};

export default PostForm;