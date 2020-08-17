const Organization = require('../models/organization.model');

const Create = async(data) => {
	try{
		const organization = await Organization.create(data);
		return organization;

	} catch (error) {
		console.log('error:', error);
	}
}

const Find = async(data) => {
	try{
		const organization = await Organization.find({});
		return organization;

	} catch (error) {
		console.log('error:', error);
	}
}

const FindOne = async(query) => {
	try{
		const organization = await Organization.findOne(query);
		return organization;

	} catch (error) {
		console.log('error:', error);
	}
}


const FindOneAndUpdate = async(filter, data) => {
	try{
		const organization = await Organization.findOneAndUpdate(filter, {
			...data
		});

		return organization;

	} catch (error) {
		console.log('error:', error);
	}
}


const DeleteOne = async(filter) => {
	try{
		const organization = await Organization.deleteOne(filter);
		
		return organization;

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