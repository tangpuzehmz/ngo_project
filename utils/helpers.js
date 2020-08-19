const jwt = require('jsonwebtoken');

const jwtVerify = (token) =>
	new Promise((resolve, reject) => {
		jwt.verify(token, 'mysecretkey', (error, decoded) => {
			if(error) {
				reject(new Error(error))
			} else {
				resolve(decoded)
			}
		});
	});

module.exports = {
	jwtVerify,
}
