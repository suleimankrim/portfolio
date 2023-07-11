import type { Joke } from './(type)';
import fetchId from './fetchById';
const fetchComic = async (): Promise<Joke> => {
	const params = new URLSearchParams();
	const id = await fetchId();
	params.append('id', id);
	console.log('https://fwd.innopolis.university/api/comic?' + params.toString());
	const response = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
	const data: Joke = await response.json();
	return data;
};
export default fetchComic;
