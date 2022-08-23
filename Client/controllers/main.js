'use strict';
const getData = async () => {
	return await getApplications();
};

document.addEventListener('DOMContentLoaded', async () => {
	await render(await getData());
});
const render = async (applications) => {
	const htmlApplications = applications
		.map((app) => {
			if (app.imageurl == '') {
				return `<div class="row">
                <img class="image" src="../images/Help.png" alt="App logo" width="100" height="100"></img>
                <div class="ml-3 text-left">
                    <h4>${app.name}</h4>
                    <h5>${app.desc}</h5>
                    <p>Price: ${app.price}$</p>
                    <p>Company: ${app.companyname}</p>
                </div>
				<button type="button" onclick=removeAppFromDB("${app.id}") class="btn btn-danger float-end ml-5">🗑️</button>
            </div>`;
			} else {
				return `<div class="row">
                <img class="image" src="../images/${app.imageurl}" alt="App logo" width="100" height="100"></img>
                <div class="ml-3 text-left">
                    <h4>${app.name}</h4>
                    <h5>${app.desc}</h5>
                    <p>Price: ${app.price}$</p>
                    <p>Company: ${app.companyname}</p>
                </div>
				<button type="button" onclick=removeAppFromDB("${app.id}") class="btn btn-danger float-end ml-5">🗑️</button>
            </div>`;
			}
		})
		.join('');
	document.getElementById('applications').innerHTML = htmlApplications;
	if ((applications.length = 0)) {
		document.getElementById('applications').innerHTML = '';
	}
};
const search = document.getElementById('search');

async function searchAction() {
	const applications = await getData();
	let filteredApplications = applications.filter((app) => {
		return app.name.toLowerCase().includes(search.value.toLowerCase());
	});
	render(filteredApplications);
}
