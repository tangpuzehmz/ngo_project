const Token = require('../models/token.model');

const Create = async(data) => {
	try{
		const token = await Token.create(data);
		return token;

	} catch (error) {
		console.log('error:', error);
	}
}


const FindOne = async(query) => {
	try{
		const token = await Token.findOne(query);
		return token;

	} catch (error) {
		console.log('error:', error);
	}
}


const DeleteOne = async(filter) => {
	try{
		const token = await Token.deleteOne(filter);

		return token;

	} catch (error) {
		console.log('error:', error);
	}
}


module.exports = {
	Create,
	FindOne,
	DeleteOne,
}
