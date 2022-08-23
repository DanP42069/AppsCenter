const getApplications = async () => {
	try {
		const result = await fetch(`http://localhost:3000/api/applications`);
		const arr = await result.json();
		return arr;
	} catch (err) {
		return [];
	}
};

const addAppToDB = async (application) => {
	await fetch('http://localhost:3000/api/application', {
		method: 'POST',
		body: JSON.stringify(application),
		headers: { 'content-type': 'application/json' },
	});
};

const removeAppFromDB = async (id) => {
	await fetch(`http://localhost:3000/api/application/${id}`, {
		method: 'DELETE',
	});
	await render(await getData());
};
