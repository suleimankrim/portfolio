import type { Joke } from './(type)';

/** @type {import('./$types').PageLoad} */
export function load() {
	const fetchId = async (): Promise<string> => {
		const params = new URLSearchParams();
		params.append('email', 's.karimeddin@innopolis.university');
		console.log('https://fwd.innopolis.university/api/hw2?' + params.toString());
		const response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
		const id: string = await response.json();
		return id;
	};
	const fetchComic = async (): Promise<Joke> => {
		const params = new URLSearchParams();
		const id = await fetchId();
		params.append('id', id);
		console.log('https://fwd.innopolis.university/api/comic?' + params.toString());
		const response = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
		const data: Joke = await response.json();
		return data;
	};
	return {
		posts: fetchComic()
	};
}
