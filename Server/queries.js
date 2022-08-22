'use strict';
const { connection } = require('./database');
const Pool = require('pg').Pool;

const sendQuery = async (query) => {
	try {
		const con = await connection();
		const result = await con.query(query);
		return result.rows;
	} catch (err) {
		console.log(err);
	}
};

const getApplications = async () => {
	return await sendQuery({ text: 'Select * FROM t_applications' });
};

const getApplication = async (id) => {
	return await sendQuery({ text: 'Select * FROM t_applications WHERE id=$1', values: [id] });
};

const addApplication = async (application) => {
	await sendQuery({
		text: 'INSERT INTO t_applications VALUES($1,$2,$3,$4,$5,$6)',
		values: [
			application.id,
			application.imageUrl,
			application.name,
			application.price,
			application.desc,
			application.companyName,
		],
	});
};

const deleteApplication = async (id) => {
	await sendQuery({
		text: 'DELETE FROM t_applications WHERE id=$1',
		values: [id],
	});
};

module.exports = {
	getApplication,
	getApplications,
	addApplication,
	deleteApplication,
};
