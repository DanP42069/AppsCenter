`use strict`;
const addItemToTheList = (data) => {
	localStorage.setItem(
		'applications',
		JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data))
	);
};

const getNextId = () => {
	let id = localStorage.getItem('id');
	localStorage.setItem('id', ++id);

	return id;
};

document.addEventListener('DOMContentLoaded', () => {});

const addApplication = (event) => {
	event.preventDefault();
	let name = document.getElementById('appName').value;
	let price = document.getElementById('price').value;
	let desc = document.getElementById('appDesc').value;
	let companyName = document.getElementById('companyName').value;
	let imageUrl = document.getElementById('imageUrl').value;
	if (desc == '') {
		desc = 'this app does not have description';
	}
	if (companyName == '') {
		companyName = 'this app does not have a company';
	}
	if (
		(name == '') |
		(price == '') |
		isNaN(price) |
		!isNaN(companyName) |
		!isNaN(desc)
	) {
		document.getElementById('error').innerText = `Oops, something went wrong!
        check your fields again.`;
	} else {
		let app = {
			id: getNextId(),
			imageUrl,
			name,
			price,
			desc,
			companyName,
		};
		addItemToTheList(app);
		location.href = './main.html';
	}
};
