import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-10">
            <h2>Comments</h2>
        </div>
        <div className="divide-y divide-solid divide-gray-200">
            {comments &&
            comments.map(comment => (
                <article className="max-w-screen-md py-8">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <img
                                src="https://randomuser.me/api/portraits/women/18.jpg"
                                alt="user icon"
                                className="w-14 h-14 rounded-full"
                            />
                        </div>
                        <div>
                            <Link
                                to={`/profile/${comment.username}`}
                                className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
                            >
                                {comment.username}
                            </Link>
                            <p className="text-gray-400 text-sm">{comment.createdAt}</p>
                        </div>
                    </div>
                    <div className="my-4" key={comment._id}>
                    {comment.commentBody}
                    </div>
                </article>
            ))}
        </div>
    </div>
  )
}

export default CommentList;