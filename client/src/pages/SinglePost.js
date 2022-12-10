import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_POST } from '../utils/queries';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Blog';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });
  
  const post = data?.post || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="w-full h-full">
        <div className="flex justify-center items-center">
          <article className="max-w-screen-lg mt-[130px] bg-gray-50 m-4 p-4 flex flex-col rounded-md shadow-lg">
            <div className="w-full flex items-center">
              <div className="mr-4">
                <img
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt="user icon"
                  className="w-14 h-14 rounded-full"
                />
              </div>
              <div>
                <Link
                  to={`/profile/${post.username}`}
                  className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
                >
                  {post.username}
                </Link>
                <p className="text-gray-400">{post.createdAt}</p>
              </div>
            </div>
            <h3 className="w-full my-4">
              <Link
                to={`/post/${post._id}`}
                className="text-left hover:text-teal-300"
              >
                {post.postTitle}
              </Link>
            </h3>
            <div className="card-body">
              <p>{post.postText}</p>
            </div>
          </article>
          
          {post.commentCount > 0 && (
            <CommentList comments={post.comments} />
          )}

          {Auth.loggedIn() && <CommentForm postId={post._id} />}
        </div>
      </div>
    </Layout>
  );
};

export default SinglePost;