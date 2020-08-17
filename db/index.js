const mongoose = require('mongoose');

const database_connection = 'mongodb+srv://ehmz:dec251990@cluster0.mcy6w.mongodb.net/my_database';

const db = () => {
	try {
		mongoose.connect(database_connection, {
			useNewUrlParser: true,
			useUnifiedTopology: false,
			useFindAndModify: false,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports =  {
	db,
};
