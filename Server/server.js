'use strict';
const express = require('express');
const shortid = require('shortid');
const { addApplication, getApplication, getApplications, deleteApplication } = require('./queries');
const PORT = 3000;

const app = express();
const CORS = require('cors');
const { application } = require('express');
app.use(express.json());
app.use(CORS());

app.get('/api/applications', async (req, res) => {
	const applications = await getApplications();
	if (!applications || !applications.length) {
		res.status(404).send('Applications do not exist');
	} else {
		res.send(applications);
	}
});
app.get('/api/application/:id', async (req, res) => {
	const id = req.params.id;
	const application = await getApplication(id);

	if (application.length == 0) {
		res.status(404).send(`Application ${id} not found.`);
	} else {
		res.send(application[0]);
	}
});


app.post('/api/application', async (req, res) => {
	const newApplication = {
		id: shortid.generate(),
		imageUrl: req.body.imageUrl,
		name: req.body.name,
		price: req.body.price,
		desc: req.body.desc,
		companyName: req.body.companyName,
	};
	await addApplication(newApplication);
	res.send(newApplication);
});

app.delete('/api/application/:id', async (req, res) => {
	const id = req.params.id;
	const application = await getApplication(id);

	if (application.length == 0) {
		res.status(404).send(`Application ${id} not found.`);
	} else {
		await deleteApplication(id);
		res.send(application[0]);
	}
});

app.listen(PORT, function (err) {
	if (err) {
		console.log('Error in server setup');
	}
	console.log('Server listening on Port', PORT);
});
