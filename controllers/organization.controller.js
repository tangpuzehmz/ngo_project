const OrganizationService = require('../services/organization.service');

const AddOrganization = async(req, res) => {
	try {
		const {
			org_name,
			org_description,
			org_country,
			org_city,
			org_picture,
			admins,
		} = req.body

		const existing_organization = await OrganizationService.FindOne({
			org_name,
		});

		if(existing_organization){
			return res.status(409).json({
				message: 'Data Exists'
			});
		}

		const new_organization = await OrganizationService.Create({
			org_name,
			org_description,
			org_country,
			org_city,
			org_picture,
			admins,
		});

		return res.status(200).json({
			message: 'Success!'
		});

	}catch(error){
		console.log('error: ', error);
	}
};

const GetAllOrganizations = async(req, res) => {
	try {
		const organizations = await OrganizationService.Find();

		return res.status(200).json({
			message: "All Organizations!",
			data: organizations, 
		});
	} catch (error) {
		console.log('error: ', error);
	}
}

const GetOrganizationById = async(req, res) => {
	try {
		const {_id} = req.params
		const organization = await OrganizationService.FindOne({
			_id,
		});

		if (organization) {

			return res.status(200).json({
				message: "Organization Fetched!",
				data: organization, 
			});

		} else {

			return res.status(404).json({
				message: "Organization Not Found!",
			});
		}

	} catch (error) {
		console.log('error: ', error);
	}
}


const UpdateOrganization = async(req, res) => {
	try {
		const {organization_id} = req.params
		const {
			org_name,
			org_description,
			org_country,
			org_city,
			org_picture, 
			admins,
		} = req.body

		const organization = await OrganizationService.FindOne({
			_id: organization_id,
		});

		if(organization){

			await OrganizationService.FindOneAndUpdate({
				_id: organization_id,
			},
			{
				org_name,
				org_description,
				org_country,
				org_city,
				org_picture,
				admins, 
			});

			return res.status(200).json({
				message: "Organization Updated!",
			});

		} else {

			return res.status(404).json({
				message: "Organization Not Found!"
			});
		}
	} catch (error) {
		console.log('error: ', error);
	}
}

// const DeleteOrganization = async(req, res) => {
// 	try {
// 		const {_id} = req.params;
// 		const organization = await OrganizationService.DeleteOne({
// 			_id,
// 		});

// 		if(!_id){
// 			return res.status(404).json({
// 				message: "Organization Not Found!"
// 			})
// 		}

// 		return res.status(200).json({
// 			message: "Organization Removed!!!",
// 		});
// 	} catch (error) {
// 		console.log('error: ', error);
// 	}
// }

const DestroyOrganization = async(req, res) => {
	try {
		const {organization_id} = req.params

		const organization = await OrganizationService.FindOne({
			_id: organization_id,
		});

		if(organization){
			
			await OrganizationService.DeleteOne({
				_id: organization_id,
			});

			return res.status(200).json({
				message: "Organization Removed!",
			});

		} else {

			return res.status(404).json({
				message: "Organization Not Found!"
			})
		}

	} catch (error) {
		console.log('error: ', error);
	}
}


const GetAdminsByOrganization = async (req, res, next) => {
	const { organization_id } = req.params;
	try {
		const admins = await OrganizationService.FindOneAndPopulate(
			{ _id: organization_id },
			'admins'
		);

		return res.status(200).json({
			message: 'Ok',
			data: admins,
		});

	} catch (error) {
		return next(new Error(error.message));
	}
};



module.exports = {
	AddOrganization,
	GetAllOrganizations,
	GetOrganizationById,
	UpdateOrganization,
	// DeleteOrganization,
	DestroyOrganization,
	GetAdminsByOrganization,
}

