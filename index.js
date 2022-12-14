//declare number of women and male vaccinated
const nummale =vacinated;
const numfemale = vacinated;
//get elements
const africanMale =document.getElementById ('Male');
const africanFemale =document.getElementById ('female');
//add eventlistner
document.getElementById('button').addEventListener("click", vaccinated);
document.getElementById('total').addEventListener('submit', vaccinated);

const vaccinated = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2d861564amsh85f70d6a997aae2p1efe70jsn13ea6d069b82',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }

    };
//fet
fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
