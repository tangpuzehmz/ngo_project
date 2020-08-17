const express = require('express');
const { db } = require('./db/index');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
db();
app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json({}));

app.get('/', (req, res) => {
	res.send('Hello Ehmz!');
});

//routes
const organization = require('./routes/organization.routes');
app.use(organization);

app.listen(port, () => {
	console.log("server runs at port: ", port);
});
