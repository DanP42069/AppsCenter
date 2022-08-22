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
		(name === '') |
		(price === '') |
		isNaN(price) |
		(price < 0) |
		!isNaN(companyName) |
		!isNaN(desc) |
		(name.length < 4)
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

const priceChange = (event) => {
	if (isNaN(event.target.value) | (event.target.value < 0)) {
		event.target.style.borderColor = 'red';
	} else if (event.target.value != '') {
		event.target.style.borderColor = 'green';
	} else {
		event.target.style.removeProperty('border-color');
	}
};
const nameChange = (event) => {
	if (event.target.value.length >= 4) {
		event.target.style.borderColor = 'green';
	} else if (event.target.value.length == 0) {
		event.target.style.removeProperty('border-color');
	} else {
		event.target.style.borderColor = 'red';
	}
};
window.onload = () => {
	document.getElementById('companyName').style.borderColor = 'green';
	document.getElementById('imageUrl').style.borderColor = 'green';
	document.getElementById('appDesc').style.borderColor = 'green';
};
const change = (event) => {
	if (!isNaN(event.target.value)) {
		event.target.style.borderColor = 'red';
	} else {
		event.target.style.borderColor = 'green';
	}
};
