const players = [
  {
    id: 1,
    name: 'Cristiano Ronaldo',
    team: 'Juventus',
    picture:
      'https://www.mundodeportivo.com/r/GODO/MD/p5/Futbol/Imagenes/2019/01/16/Recortada/1095049930_20190116201145305-k0W-U454174499285LuH-980x554@MundoDeportivo-Web.jpg',
    description:
      'Cristiano ronaldo is soccer player. Actually, the "bicho" is a player of the Juventus team in Italy'
  },
  {
    id: 2,
    name: 'Lio Messi',
    team: 'Barcelona',
    picture:
      'https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2016/04/lionel_messi_fc_barcelona_sporting_de_gijon_250416.jpg?itok=wREQ7bJQ',
    description:
      'Lio Messi is soccer player. Actually, the "pulga" is a player of the Barcelona team in Spain'
  }
];

export const fetchPlayers = dispatch => {
  return dispatch({
    type: 'FETCH_DATA',
    payload: players
  });
};

export const addPlayerToFav = (player, state, dispatch) => {
  const playerInFavourites = state.favplayers.find(pl => pl.id === player.id);
  let dispatchObj = {
    type: 'ADD_PLAYER',
    payload: player
  };

  if (playerInFavourites)
    dispatchObj = {
      type: 'REMOVE_PLAYER',
      payload: state.favplayers.filter(fav => fav.id !== player.id)
    };
  return dispatch(dispatchObj);
};
