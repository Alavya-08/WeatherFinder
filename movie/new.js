const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8658698840mshce843c14e7d7095p1f76cfjsnc9321f423bde',
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));