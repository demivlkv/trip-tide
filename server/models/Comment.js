const { Schema } = require('mongoose');
const moment = require('moment');

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).format('ll @ HH:mm')
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = commentSchema;