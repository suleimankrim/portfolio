const fetchId = async (): Promise<string> => {
	const params = new URLSearchParams();
	params.append('email', 's.karimeddin@innopolis.university');
	console.log('https://fwd.innopolis.university/api/hw2?' + params.toString());
	const response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
	const id: string = await response.json();
	return id;
};
export default fetchId;
