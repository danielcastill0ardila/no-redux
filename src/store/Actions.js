import { fetchData, findSong } from '../api/fetch';

export const fetchPlayers = async (dispatch) => {
	const { data: { items } } = await fetchData();

	return dispatch({
		type: 'FETCH_DATA',
		payload: items
	});
};

export const addPlayerToFav = (player, state, dispatch) => {
	const playerInFavourites = state.favplayers.find((pl) => pl.id === player.id);
	let dispatchObj = {
		type: 'ADD_PLAYER',
		payload: player
	};

	if (playerInFavourites)
		dispatchObj = {
			type: 'REMOVE_PLAYER',
			payload: state.favplayers.filter((fav) => fav.id !== player.id)
		};
	return dispatch(dispatchObj);
};

export const searchSong = async (q, dispatch) => {
	const { data: { items } } = await findSong(q);
	return dispatch({
		type: 'SEARCH_DATA',
		payload: items
	});
};
