import axios from 'axios';

const API_URL ="https://api.github.com";

export default axios.create({
		baseURL: API_URL,
		headers: { 
			'Content-type': 'application/json',
			'Accept': 'application/json' 
		},
});
