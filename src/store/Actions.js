import { fetchData, findSong } from '../api/fetch';

export const fetchPlayers = async dispatch => {
  const {
    data: { items }
  } = await fetchData();

  return dispatch({
    type: 'FETCH_DATA',
    payload: items
  });
};

export const searchSong = async (q, dispatch) => {
  const {
    data: { items }
  } = await findSong(q);
  return dispatch({
    type: 'SEARCH_DATA',
    payload: items
  });
};
