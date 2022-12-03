const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Place.js
const placeSchema = require('./Place');

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		posts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Post',
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		savedPlaces: [placeSchema]
	},
	{
		toJSON: {
			virtuals: true,
			getters: true
		},
	}
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

// GET `placeCount` with the number of saved places
userSchema.virtual('placeCount').get(function () {
	return this.savedPlaces.length;
  });

const User = model('User', userSchema);

module.exports = User;
