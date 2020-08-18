const UserService = require('../services/user.service');

const GetAllUsersList = async (req, res, next) => {
	try {
		const users = await UserService.Find({});

		return res.status(200).json({
			message: 'Ok',
			data: users,
		});
	} catch (error) {
		return next(new Error(error.message));
	}
};


const GetUserById = async(req, res, next) => {
	const{user_type} = req.params;

	try {
		const{user_id} = req.params;
		const user	= await UserService.FindOne({
			_id: user_id,
		});

		console.log('user ', user);
		if (!user) {
			return res.status(404).json({
				message: 'User Not Found!'
			});
		}

		return res.status(200).json({
			message: 'Ok',
			data: user,
		});
	} catch (error) {
		return	next(new Error(error.message));
	}
}


const Register = async (req, res, next) => {
	try {
		const {
			username,
			name,
			email,
			password,
			language,
			country,
			userType,
			organizations,
		} = req.body;

		const existing_user = await UserService.FindOne({
			email,
		});

		if (existing_user) {

			return res.status(409).json({
				message: 'User already exist',
			});
		}

		await UserService.Create({
			username,
			name,
			email,
			password,
			language,
			country,
			userType,
			organizations,
		});

		return res.status(200).json({
			message: 'Ok',
			data: 'User Inserted!',
		});
	} catch (error) {
		return next(new Error(error.message));
	}
};


const GetUsersByType = async(req, res, next) => {
	const{user_type} = req.params;

	try {
		const users	= await UserService.Find({
			userType: user_type,
		});

		return res.status(200).json({
			message: 'Ok',
			data: users,
		});
	} catch (error) {
		return	next(new Error(error.message));
	}
}


const UpdateUser = async (req, res, next) => {
	try {
		const { user_id } = req.params;
		const {
			username,
			name,
			email,
			password,
			language,
			country,
			userType,
			organizations,
		} = req.body;

		const user = await UserService.FindOne({
			_id: user_id,
		});
		console.log('user: ', user);
		if (user) {

			await UserService.FindOneAndUpdate({ _id: user_id 
			},
			{
				username,
				name,
				email,
				password,
				language,
				country,
				userType,
				organizations,
			}
		);

		return res.status(200).json({
			message: 'Ok',
			data: 'User Updated',
		});

		} else {

			return res.status(404).json({
				message: 'User Not Found',
			});
		}

	} catch (error) {
		return next(new Error(error.message));
	}
};

const DestroyUser = async(req, res) => {
	try {
		const {user_id} = req.params

		const user = await UserService.FindOne({
			_id: user_id,
		});

		if(user){

			await UserService.DeleteOne({
				_id: user_id,
			});

			return res.status(200).json({
				message: "User Removed!",
			});

		} else {

			return res.status(404).json({
				message: "User Not Found!"
			})
		}

	} catch (error) {
		console.log('error: ', error);
	}
}


const GetOrganizationsByUser = async (req, res, next) => {
	const { user_id } = req.params;
	try {
		const admins = await UserService.FindOneAndPopulate(
			{ _id: user_id },
			'organizations'
		);

		return res.status(200).json({
			message: 'Ok',
			data: organizations,
		});

	} catch (error) {
		return next(new Error(error.message));
	}
};



module.exports = {
	GetAllUsersList,
	GetUsersByType,
	GetUserById,
	Register,
	UpdateUser,
	DestroyUser,
	GetOrganizationsByUser,
}

