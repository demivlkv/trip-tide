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
		createdAt: {
			type: String
		},
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		location: String,
		description: String,
		avatar: {
			type: String,
			trim: true,
			// match: [/\.(jpg|jpeg|png|webp|svg)$/, "Must be a valid image link!"],
			default: 'https://images.unsplash.com/photo-1620750034602-1ad42e46b86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
		},
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
	if (this.isNew || this.isCorrectPassword('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
	return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

// GET `placeCount` with the number of saved places
userSchema.virtual('placeCount').get(function () {
	return this.savedPlaces.length;
});

const User = model('User', userSchema);

module.exports = User;
