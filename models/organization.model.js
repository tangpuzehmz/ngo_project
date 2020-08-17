const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
	org_name: String,
	org_description: String,
	org_country: String,
	org_city: String,
	org_picture: String,
});


const Organization = mongoose.model(
	'organization', //model name
	OrganizationSchema,
	'organization'	//collection name
)

module.exports = Organization;