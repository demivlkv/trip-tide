import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
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
                                src="https://randomuser.me/api/portraits/women/18.jpg"
                                alt="user icon"
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