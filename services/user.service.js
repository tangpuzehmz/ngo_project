const User = require('../models/user.model');

const Create = async(data) => {
	try{
		const user = await User.create(data);
		return user;

	} catch (error) {
		console.log('error:', error);
	}
}

const Find = async(data) => {
	try{
		const user = await User.find({});
		return user;

	} catch (error) {
		console.log('error:', error);
	}
}

const FindOne = async(query) => {
	try{
		const user = await User.findOne(query);
		return user;

	} catch (error) {
		console.log('error:', error);
	}
}


const FindOneAndUpdate = async(filter, data) => {
	try{
		const user = await User.findOneAndUpdate(filter, {
			...data
		});

		return user;

	} catch (error) {
		console.log('error:', error);
	}
}


const DeleteOne = async(filter) => {
	try{
		const user = await User.deleteOne(filter);
		
		return user;

	} catch (error) {
		console.log('error:', error);
	}
}

module.exports = {
	Create,
	Find,
	FindOne,
	FindOneAndUpdate,
	DeleteOne,
}