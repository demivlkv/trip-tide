import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const CommentList = ({ comments }) => {
    const { data } = useQuery(QUERY_ME);
    const user = data?.me || {};

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-10">
            <h2 className="text-white">Comments</h2>
        </div>
        <div className="mt-6">
            {comments &&
            comments.map(comment => (
                <article className="max-w-screen-md py-4">
                    <div className="w-full flex justify-center items-start">
                        <div className="w-24">
                            <img
                                src={user.avatar}
                                alt={user.username}
                                className="w-16 h-16 rounded-full"
                            />
                        </div>
                        <div className="w-full">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                                <Link
                                    to={`/profile/${comment.username}`}
                                    className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
                                >
                                    {comment.username}
                                </Link>
                                <div className="mt-4" key={comment._id}>
                                    {comment.commentBody}
                                </div>
                            </div>
                            <p className="mt-2 pl-4 text-gray-500 text-xs md:text-sm mix-blend-difference">{comment.createdAt}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </div>
  )
}

export default CommentList;