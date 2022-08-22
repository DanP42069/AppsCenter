'use strict';
const Pool = require('pg').Pool;
async function connection() {
	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'postgres',
		password: 'Aa123456',
		port: 5433,
	});
	try {
		return pool;
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	connection,
};
