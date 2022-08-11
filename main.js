'use strict';
const getData = () => {
	if (localStorage.getItem('applications') == null) {
		localStorage.setItem('applications', JSON.stringify(applications));
		localStorage.setItem('id', id);
	}

	return JSON.parse(localStorage.getItem('applications'));
};

document.addEventListener('DOMContentLoaded', (htmlApplications = getData()) => {});
const render = (applications = getData()) => {
	const htmlApplications = applications
		.map((app) => {
			if (app.imageUrl == '') {
				return `<div class="row">
                <img class="image" src="images/Help.png" alt="App logo" width="100" height="100"></img>
                <div class="ml-3 text-left">
                    <h4>${app.name}</h4>
                    <h5>${app.desc}</h5>
                    <p>Price: ${app.price}$</p>
                    <p>Company: ${app.companyName}</p>
                </div>
            </div>`;
			} else {
				return `<div class="row">
                <img class="image" src="images/${app.id}/${app.imageUrl}" alt="App logo" width="100" height="100"></img>
                <div class="ml-3 text-left">
                    <h4>${app.name}</h4>
                    <h5>${app.desc}</h5>
                    <p>Price: ${app.price}$</p>
                    <p>Company: ${app.companyName}</p>
                </div>
            </div>`;
			}
		})
		.join('');
	document.getElementById('applications').innerHTML = htmlApplications;
};
window.onload = () => {
	render();
};
const search = document.getElementById('search');
console.log(search);
function searchAction() {
	const applications = getData();
	let filteredApplicatiosn = applications.filter((app) => {
		return app.name.toLowerCase().includes(search.value.toLowerCase());
	});
	render(filteredApplicatiosn);
}
