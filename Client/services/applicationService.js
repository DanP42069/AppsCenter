const getApplications = async () => {
	const result = await fetch(`http://localhost:3000/api/applications`);
	const arr = await result.json();
	return arr;
};
const addAppToDB = async (application) => {
	await fetch('http://localhost:3000/api/application', {
		method: 'POST',
		body: JSON.stringify(application),
		headers: { 'content-type': 'application/json' },
	});
};
