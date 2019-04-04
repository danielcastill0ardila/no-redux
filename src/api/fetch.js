import axios from 'axios';

export const fetchData = () =>
	axios.get(
		`https://content.googleapis.com/youtube/v3/search?part=snippet&q=lethergo&type=video&key=AIzaSyAGooM858aAvjq-o-IaQmxgGvQBk7HjDsU`
	);
export const findSong = (q) =>
	axios.get(
		`https://content.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&key=AIzaSyAGooM858aAvjq-o-IaQmxgGvQBk7HjDsU`
	);
