import type { Joke } from './(type)';
import fetchComic from './fetchComic';

const f = async (): Promise<Joke> => {
	const comm: Joke = await fetchComic();
	return comm;
	// const image = document.getElementById('comicc') as HTMLImageElement;
	// image.src = comm.img;
	// image.alt = comm.alt;
	// const title = document.getElementById('title') as HTMLElement;
	// title.innerText = comm.safe_title;
	// const date = document.getElementById('date') as HTMLElement;
	// const dat = new Date(
	// 	comm.month.toString() + '/' + comm.day.toString() + '/' + comm.year.toString()
	// );
	// date.innerText = dat.toLocaleDateString();
	// const t = document.getElementById('kk') as HTMLElement;
};
export default f;
