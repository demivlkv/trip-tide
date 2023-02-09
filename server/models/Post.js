const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const moment = require('moment');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: 'You need write something!'
    },
    postText: {
      type: String,
      required: 'You need write something!'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).fromNow()
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema],
    likes: [
      {
        username: String,
        createdAt: {
          type: Date,
          default: Date.now,
          get: timestamp => moment(timestamp).fromNow()
        }
      }
    ],
    author: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        immutable: true
      }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

postSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

const Post = model('Post', postSchema);

module.exports = Post;