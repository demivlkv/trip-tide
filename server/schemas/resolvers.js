const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts')
                    .populate('friends');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },

        // GET all posts in DESC order
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },

        // GET post by ID
        post: async (parent, { _id }) => {
            try{
                const post = await Post.findOne({ _id });

                if (post) {
                    return post;
                } else {
                    throw new Error('Post not found');
                }
            } catch(err) {
                throw new Error(err);
            }
        },

        // GET all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('posts')
        },

        // GET user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('posts')
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );
                return post;
            }
            throw new AuthenticationError('You need to be logged in');
        },

        updateUser: async (parent, { input, userId }, context) => {
            if (context.user) {
                if (context.user._id === userId) {
                    const user = await User.findByIdAndUpdate(
                        userId,
                        { ...input },
                        { new: true }
                    )
                        .select('-__v -password')

                    const token = signToken(user);
                    return { token, user };
                }
                throw new AuthenticationError('You do not have permission to do that');
            }
            throw new AuthenticationError('You need to be logged in');
        },

        likePost: async (parent, { postId }, context) => {
            const { username } = context.user;
            const post = await Post.findById(postId);

            if (post) {
                if (post.likes.find(like => like.username === username)) {
                    // if post is already liked, then unlike it
                    post.likes = post.likes.filter(like => like.username !== username);
                } else {
                    // if post is unliked, then like post
                    post.likes.push({
                        username,
                        createdAt: new Date().toISOString()
                    })
                }
                await post.save();
                return post;
            } else {
                throw new Error('Post not found');
            }
        },

        deletePost: async (parent, { postId }, context) => {
            if (context.user) {
                const post = await Post.findById(postId);
                await post.delete();
                return 'Post successfully deleted';
            }
            throw new AuthenticationError('You need to be logged in');
        },

        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );
                return updatedPost;
            }
            throw new AuthenticationError('You need to be logged in');
        },

        deleteComment: async (parent, { postId, commentId }, context) => {
            const { username } = context.user;
            const post = await Post.findById(postId);

            if (post) {
                const commentIndex = post.comments.findIndex((c) => c.id === commentId);

                if (post.comments[commentIndex].username === username) {
                    post.comments.splice(commentIndex, 1);
                    await post.save();
                    return post;
                } else {
                    throw new AuthenticationError('You need to be logged in');
                }
            } else {
                throw new Error ('Post not found');
            }
        },

        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in');
        },

        removeFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: friendId } },
                    { new: true }
                ).populate('friends');
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in');
        },

        savePlace: async (parent, { placeId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedPlaces: input } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in');
        },

        removePlace: async (parent, { placeId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedPlaces: { placeId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in');
        }
    }
};

module.exports = resolvers;