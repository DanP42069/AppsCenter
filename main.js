'use strict';
const getData = () => {
	if (localStorage.getItem('applications') == null) {
		localStorage.setItem('applications', JSON.stringify(applications));
		localStorage.setItem('id', id);
	}

	return JSON.parse(localStorage.getItem('applications'));
};

document.addEventListener('DOMContentLoaded', () => {});
const render = () => {
	const htmlApplications = getData()
		.map((app) => {
			return `<div class="row">
                <img class="image" src="images/${app.id}/${app.imageUrl}" alt="App logo" width="100" height="100"></img>
                <div class="ml-3 text-left">
                    <h4>${app.name}</h4>
                    <h5>${app.desc}</h5>
                    <p>Price: ${app.price}$</p>
                    <p>Company: ${app.companyName}</p>
                </div>
            </div>`;
		})
		.join('');
	document.querySelector('.applications').innerHTML = htmlApplications;
};
window.onload = () => {
    render();
};
