import axios from 'axios';

export default async function handler(req, res) {
const options = {
  method: 'GET',
  url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
  params: {id: '2396871'},
  headers: {
    'X-RapidAPI-Key': '7e182ab4e1msh3420ad6555f9136p19990ajsnb77a3755f8a9',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  }
};
};

try {
	let response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}