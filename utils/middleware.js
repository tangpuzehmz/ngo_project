const {jwtVerify} = require('../utils/helpers')

const isAuthenticated = async(req, res, next) => {
	const authorization = req.headers['x-access-token'] || req.headers.authorization;
	const token = authorization && authorization.startsWith('Bearer') && authorization.slice(7, authorization.length);

	if(token) {
		try{
			req.decoded = await jwtVerify(token)
			return next()

		} catch(error) {
			return res.status(400).json({
				message: "invalid Token!",
			});
		}
	} else {
		return res.status(500).json({
			message: 'Auth token is not supplied!',
		});
	}
}

module.exports = {
	isAuthenticated,
}
