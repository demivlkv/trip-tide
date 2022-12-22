import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

import { QUERY_POST, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import LikeButton from '../components/LikeButton';
import DeleteButton from '../components/DeleteButton';

const SinglePost = () => {
  const { id: postId } = useParams();
  const { data: userData } = useQuery(QUERY_ME);
  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });
  const user = userData?.me || {};
  const post = data?.post || [];

  if (loading) {
    return <div>Loading...</div>;
  } else {
    let postMarkup;
    const { _id, likes, likeCount } = post;

    postMarkup = (
      <Layout>
        <div className="w-full h-full">
          <div className="px-4 flex flex-col justify-center items-center">
            <article className="max-w-screen-md mt-[130px] bg-gray-50 m-4 p-4 flex flex-col rounded-md shadow-lg">
              <div className="w-full flex items-center">
                <div className="mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/18.jpg"
                    alt="user icon"
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full"
                  />
                </div>
                <div>
                  <Link
                    to={`/profile/${post.username}`}
                    className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
                  >
                    {post.username}
                  </Link>
                  <p className="text-gray-400 text-sm">{post.createdAt}</p>
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

              <div className="mt-4 flex justify-between items-center text-gray-500 text-xs md:text-sm">
                <div className="inline-flex">
                  <Link to={`/post/${post._id}`} className="mr-4 flex items-center text-teal-400 hover:text-gray-500">
                    <ChatBubbleLeftRightIcon width={20} className="mr-1" /> {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments' }
                  </Link>

                  <LikeButton user={user} post={{ _id, likes, likeCount}} />
                </div>
                <div>
                  {/* gives user the option to delete their own post */}
                  {user && post.username === user.username && (
                    <DeleteButton postId={post._id} />
                  )}
                </div>
              </div>
            </article>
            
            {post.commentCount > 0 && (
              <CommentList comments={post.comments} />
            )}

            {Auth.loggedIn() && <CommentForm postId={post._id} />}
          </div>
        </div>
      </Layout>
    )
    return postMarkup;
  }
};

export default SinglePost;