const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: String,
	name: String,
	email: String,
	password: String,
	language: String,
	country: String,
	usertype: {
		type: String,
		enum: ['user', 'ngo_admin', 'super_admin'],
		default: 'user',
	},
	organizations: [
		{type: mongoose.Schema.types.ObjectId, ref: 'organization'},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	{
		versionKey: false,
	}
);


UserSchema.pre('save', async function(next) {
	const user = this;
	user.password = user.password && (await bcrypt.hash(user.password.trim(), 12));
	next();
	// body...
});

UserSchema.pre('findOneAndUpdate', async function() {
	this.update({}, {$set: {updatedAt: new Date()} });
	// body...
});



const Organization = mongoose.model(
	'user', //model name
	UserSchema,
	'user'	//collection name
)

module.exports = User;